import express from "express";
import { emailQueue } from "./queue";

const app = express();

app.use(express.json());

app.post("/welcome-email", async (req, res) => {
    const job = emailQueue.add(
        "sent-welcome-email",
        {
            to: req.body.to,
            subject: req.body.subject || "Learner",
            body: req.body.body
        },
        {
            attempts: 3,
            backoff: {
                type: "exponential",
                delay: 5000
            }
        }
    )

    res.json({
        message: "Welcome email job added to the queue",
        jobId: (await job).id
    })
})

app.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000");
});