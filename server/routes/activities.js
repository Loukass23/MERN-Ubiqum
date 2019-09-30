const express = require('express');
const router = express.Router();
const activityModel = require('../model/activityModel')

/*get all cities*/
router.get('/all',
    /* Uncomment next line to add web token athentification */
    //passport.authenticate("jwt", { session: false }),
    (req, res) => {
        activityModel.find({})
            .then(activities => {
                res.send(activities)
            })
            .catch(err => console.log(err));
    });
router.post('/',
    /* Uncomment next line to add web token athentification */
    //passport.authenticate("jwt", { session: false }),
    (req, res) => {
        activityModel.find({})
            .then(activities => {
                res.send(activities)
            })
            .catch(err => console.log(err));
    });


module.exports = router