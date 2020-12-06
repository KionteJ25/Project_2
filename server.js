//dependencies
var express = require("express");
var router = require("./routes/api-routes.js");
var db = require("./models")

var PORT = process.env.PORT || 8080;

const app = express();

//serve static content
app.use(express.static(__dirname + "/controllers/public"));

//Parse application body 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");




app.use(router);

//Start server so that it can listen
db.sequelize.sync({force: true}).then(function() {
    app.listen(PORT, function() {
        console.log(`Server listening on: http://localhost:${PORT}`);
    });
})
