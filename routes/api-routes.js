
var express = require("express");
var router = express.Router();
//requiring in our playlist.js(model)
var db = require("../models");
//creating our routes for each page using our router
router.get("/", function(req, res) {
        res.render("index");
    });
<<<<<<< HEAD
router.get("/api/playlist", function(req, res) {

    db.Search.findAll({}).then(function(dbSearch) {
        res.json(dbSearch)
        res.render("playlist", dbSearch);
    });
});
=======

router.get("/api/playlist", function(req, res) {
        db.Search.findAll({}).then(function(dbSearch) {
            res.json(dbSearch)
            res.render('playlist', {result: result});
        });
    });
>>>>>>> 88ea2499d93798f3bfacbce7243758c1c01b8aca

router.post("/api/playlist", function(req, res) {
    console.log(req.body);
    db.Search.create({
        artist: req.body.artist,
        album: req.body.album,
        track: req.body.track
    }).then(function(dbSearch) {
        res.json(dbSearch);
    })
<<<<<<< HEAD
    
    
=======
>>>>>>> 88ea2499d93798f3bfacbce7243758c1c01b8aca
});
     
router.put("/api/playlist/:id", function(req, res) {
   var newID = req.params.id
    db.Search.update({
        addTrack: req.body.addTrack
    }, {
        where: { 
            id: newID 
        }
    }).then(function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
//Exporting our route for our server
<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;

// JSON.parse(JSON.stringify(data))
>>>>>>> 88ea2499d93798f3bfacbce7243758c1c01b8aca
