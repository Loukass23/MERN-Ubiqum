const mongoose = require('mongoose')

const activitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    city: {
        type: String,
    },
    img: {
        type: String,
    }
    ,
    description: {
        type: String,
    }
})

//name if module is the singular of how the database is called
module.exports = Activity = mongoose.model('activity', activitySchema)