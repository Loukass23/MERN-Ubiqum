const mongoose = require('mongoose')
const Activity = require('../model/activityModel')

const itinerarySchema = new mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    summary: {
        type: String
    },
    duration: {
        type: String
    },
    price: {
        type: String
    },
    rating: {
        type: String
    },
    activities: {
        type: Array
    }
})

//name if module is the singular of how the database is called
module.exports = mongoose.model('itinerary', itinerarySchema)