const express = require("express"); // import express from "express";
const authRouter = require("./routes/auth.routes");


const app = express();

app.use(express.json());

app.use("/api/auth", authRouter);


module.exports = app;