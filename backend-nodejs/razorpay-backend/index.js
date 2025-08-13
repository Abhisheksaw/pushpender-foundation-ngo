import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import paymentRoutes from "./routes/payment"; // add .js extension

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/payment/", paymentRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
