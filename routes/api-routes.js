
var express = require("express");
var router = express.Router();
//requiring in our playlist.js(model)
var db = require("../models");
//creating our routes for each page using our router
router.get("/", function(req, res) {
        res.render("index");
    });
router.get("/api/playlist", function(req, res) {
    db.Search.findAll({}).then(function(data) {
        // JSON.parse(JSON.stringify(data))
        var hbsObject = {
            searches: data
        };
        console.log(hbsObject);
        res.render("playlist", hbsObject);
    });
});

router.post("/api/playlist", function(req, res) {
    console.log(req.body);
    db.Search.create({
        artist: req.body.artist,
        album: req.body.album,
        track: req.body.track
    }).then(function(dbSearch) {
        res.json(dbSearch);
    })
    // console.log(req.body);
    // db.Search.create(req.body).then(function(result) {
    //     res.json({ id: result.insertId });
    // });
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
module.exports = router;