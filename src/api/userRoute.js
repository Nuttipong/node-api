const router = require('express').Router();

// router.get('/', function(req, res) {
//     return res.status(200).send('OK');
// });

// router.post('/', function(req, res) {

// });

// router.put('/', function(req, res) {

// });

// router.delete('/', function(req, res) {

// });

// setup boilerplate route
router.route('/')
    .get(function(req, res) {
        return res.status(200).send({ok: true});
    });

module.exports = router;
