const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    brand: String,
    model: {
        type: String,
        required: true,
        unique: true
    },
    year: Number
})

module.exports = mongoose.model("Car", carSchema)