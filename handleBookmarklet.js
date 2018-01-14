var mysql = require("mysql");

var newURL = process.argv[2];

console.log(newURL); 

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Arseface04!",
  database: "bookmarklet_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");

  connection.query(`INSERT INTO bookmarks (url) VALUES ("${newURL}")`, function(err, res){
      if(err) throw err;

      console.log(res);
      connection.destroy();
  });
});