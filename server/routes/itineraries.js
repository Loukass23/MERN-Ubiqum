const express = require('express');
const router = express.Router();
const itineraryModel = require('../model/itineraryModel')

router.get('/all',
    (req, res) => {
        itineraryModel.find({})
            .then(itineraries => {
                res.send(itineraries)
            })
            .catch(err => console.log(err));
    });


router.get('/:name',
    (req, res) => {
        let cityRequested = req.params.name;
        itineraryModel.find({ city: cityRequested })
            .then(itineraries => {
                if (itineraries == null) res.send({ msg: "No Itineraries for " + cityRequested })
                else res.send(itineraries)
            })
            .catch(err => console.log(err));
    });

module.exports = router