var express = require('express');
var router = express.Router();
const journalmodel = require ('../models/journalmodel');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/entries', function (req, res) {


    journalmodel.find({}, function (err, entries) { //Use the find method on the data model to search DB
        if (err) {
            throw err; // If we get an error then bail
        }
        // Use Express to send the JSON back to the client in the web response
        res.send(entries);
    });

});


router.post('/entries/add', function(req, res) {
    const newEntry =
        journalmodel({
            username: req.body.username,
            title: req.body.title,
            JournalEntry: req.body.JournalEntry,

        });

    newEntry.save(function (Error) {
        if (Error) {
            throw Error;
        }

        res.json({result: 'Ok'});
    });


});
router.get('/entries/setup', function(req, res) {


});

// router.delete('/entries', function (req, res) {
//
//
//     journalmodel.findByIdAndRemove(req.body.id, function (err) {
//         if (err) {
//             throw err;
//         }
//
//         res.json({result: 'OK'});
//     })

// });




module.exports = router;
