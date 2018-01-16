// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT);

var mysql = require("mysql");

app.use(express.static('public'))

//serve HTML file GET
app.get("/", function(req, res) {
    var connection;
    if(process.env.JAWSDB_URL){
        connection = mysql.createConnection(process.env.JAWSDB_URL);
    }else{
        connection = mysql.createConnection({
            host: "localhost",
            port: 3306,
        
            // Your username
            user: "root",
        
            // Your password
            password: "Arseface04!",
            database: "bookmarklet_db"
        });
    }

    connection.connect(function(err) {
        if (err) throw err;
        console.log("connected as id " + connection.threadId + "\n");
    
        connection.query(`SELECT * FROM bookmarks`, function(err, result){
            if(err) throw err;
    
            console.log(result);
            res.json(result);
            connection.destroy();
        });

        //connection.destroy();
    });
});


//POST  Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware    
    console.log("Req body: " + req.body.newURL);

    var connection;
    if(process.env.JAWSDB_URL){
        connection = mysql.createConnection(process.env.JAWSDB_URL);
    }else{
        connection = mysql.createConnection({
            host: "localhost",
            port: 3306,
        
            // Your username
            user: "root",
        
            // Your password
            password: "Arseface04!",
            database: "bookmarklet_db"
        });
    }

    connection.connect(function(err) {
        if (err) throw err;
        console.log("connected as id " + connection.threadId + "\n");
    
        connection.query(`INSERT INTO bookmarks (url) VALUES ("${req.body.newURL}")`, function(err, res){
            if(err) throw err;
    
            console.log(res);
            //connection.destroy();
        });
        //connection.destroy();
    });
  });

