import express from "express";
import type { Request, Response } from "express";

import {
    getSignedUrl,
    S3RequestPresigner,
} from "@aws-sdk/s3-request-presigner";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

const app = express();
const PORT = 3200;

const client = new S3Client({
    region: "ap-south-1",
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
});

const createPresignedUrlWithClient = ({ bucket, key }) => {
    const command = new PutObjectCommand({ Bucket: bucket, Key: key, ContentType: "image/jpeg" });
    return getSignedUrl(client, command, { expiresIn: 3600 });
};

app.get("/", (req: Request, res: Response) => {
    res.json({ message: "Hello from the server." });
});

app.get("/api/get-presigned-url", async (req: Request, res: Response) => {
    // Get Presigned url from S3

    const url = await createPresignedUrlWithClient({
        bucket: process.env.AWS_S3_BUCKET_NAME!,
        key: "file1.png"
    });

    res.json({ url: url });
});

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});
