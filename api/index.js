import express from "express";
import { PrismaClient } from "@prisma/client";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

const prisma = new PrismaClient();

app.get("/bill", async (req, res) => {
  const bills = await prisma.bill.findMany({});
  res.json(bills);
});

app.post("/bill", async (req, res) => {
  const { type, money, date, usedFor } = req.body;
  const bill = await prisma.bill.create({
    data: {
      type,
      money,
      date,
      usedFor,
    },
  });
  res.json(bill);
});

app.listen(8000, () => {
  console.log("Server running on http://localhost:8000 🎉 🚀");
});
