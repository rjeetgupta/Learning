import express from "express";
import Redis from "ioredis";

const app = express();
app.use(express.json());

const redis = new Redis(process.env.REDIS_URL || "redis://localhost:6379");

function OTPKey(phone) {
    return `otp:${phone}`
}


app.post("/generate-otp", async (req, res) => {
    const { phone } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    await redis.set(OTPKey(phone), otp, "EX", 60); // OTP expires in 60 seconds

    res.json({ message: "OTP generated successfully", otp });
});

app.post("/verify-otp", async (req, res) => {
    const { phone, otp } = req.body;
    const storedOtp = await redis.get(OTPKey(phone));

    if(!storedOtp) {
        return res.status(400).json({ message: "OTP expired or not found" });
    }

    if(storedOtp !== otp) {
        return res.status(400).json({ message: "Invalid OTP" });
    }

    await redis.del(OTPKey(phone)); // Delete OTP after successful verification
    res.json({ message: "OTP verified successfully" });
});

app.get("/otp/:phone/ttl", async (req, res) => {
    const { phone } = req.params;
    const ttl = await redis.ttl(OTPKey(phone));
    res.json({ ttl });
})


app.listen(3000, (req, res) => {
    console.log(`Application is listening on http://localhost:3000`);
})