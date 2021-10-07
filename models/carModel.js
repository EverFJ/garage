const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    brand: String,
    model: {
        type: String,
        required: true,
        unique: true
    },
    year: Number,
    created: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model("Car", carSchema)