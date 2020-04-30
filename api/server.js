const express = require("express");
const helmet = require("helmet");

const carsRouter = require("../cars/cars-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use("/cars", carsRouter);



server.get("/", (req, res) => {
	res.json({
		message: "Welcome to the API",
	})
})

module.exports = server;