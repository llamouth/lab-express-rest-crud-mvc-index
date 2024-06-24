const express = require("express")
const persons = express.Router()
const {organizePeopleWithLocations} = require("../utils/helpers.js")

persons.get("/", (req, res) => {
    const updatedArray = organizePeopleWithLocations()
    res.json(updatedArray)
})

module.exports = persons