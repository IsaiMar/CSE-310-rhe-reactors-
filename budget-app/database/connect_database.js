/*
    This is is the mysql connection wrapper. Use this file to connect to the database.

    **process.env allows us to connect to the .env file and use the keys found in it. 
*/

// requires mysql
var mysql = require('mysql');

// requires our .env file to get our mysql credentials.
const dotenv = require('dotenv');

// configures the .env file. 
dotenv.config();

// takes info from the .env and uses it to create a connection.
var mysqlConnection = mysql.createConnection({
    host: process.env.HOST,                         // the host name in .env file
    user: process.env.USER,                         // the username in the .env file
    password: process.env.PASSWORD,                 // the password from the .env file
    database: process.env.DATABASE                  // the database name from the .env file
});

// if it connects to the database then it will output the connection. 
mysqlConnection.connect(function(err){
    if (err) throw err;                             // if this is thrown then we didn't connect. 
    console.log("Connected!");                      // if this shows in our console then we are connected and good to go. 
});

// Allows us to use our wrapper throughout the project.
module.exports = mysqlConnection;