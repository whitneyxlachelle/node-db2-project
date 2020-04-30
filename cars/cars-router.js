const express = require("express")

const db = require("../data/config")

const router = express.Router();

router.get("/", (req, res) => {
    db("cars")
        .then(cars => {
            res.json(cars);
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({
                message: "Failed to get cars",
            })
        })
})

router.get("/:id", (req, res) => {
    const { id } = req.params;

    db("cars")
        .where({ id })
        .first()
        .then(car => {
            res.json(car)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({
                message: "Failed to get car by id",
            })
        })
})

router.post("/", async (req, res) => {
    try {
        const [id] = await db("cars").insert(req.body)
        const car = await db("cars").where({ id }).first()
            res.status(201).json(car)
    } catch(err) {
        console.log("Error", err)
        res.status(500).json({
            error: "Failed to create car post"
        })
    }
})

module.exports = router;