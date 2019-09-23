const express = require('express');
const router = express.Router();
const cityModel = require('../model/cityModel')

/*get all cities*/
router.get('/',
    /* Uncomment next line to add web token athentification */
    //passport.authenticate("jwt", { session: false }),
    (req, res) => {
        cityModel.find({})
            .then(files => {
                res.send(files)
            })
            .catch(err => console.log(err));
    });