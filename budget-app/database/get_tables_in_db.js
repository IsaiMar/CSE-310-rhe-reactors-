
// allows us to connect to the database. 
var mydb = require('./connect_database');

/**********************************************************
* READ THE TABLES IN THE DATABASE
*   - This function allows you to see all the tables in the 
*     current database.
*
*   NOTE:
*       - Only use this function if you want to see the 
*         database tables. It will only show in your 
*         console.    
***********************************************************/
function readTableDB()
{
    // Query to allow us to get tables from mydb.
    mydb.query('SHOW tables', function(err, tables){
        if (err) throw err;                                     // if error happens, then it will throw an error.           
        const result = tables.map(table => 
                                  table['Tables_in_mydb'])      // allows us to see all of the tables.
        console.log(result)                                     // displays the tables in the console.
    })
}

module.exports = readTableDB;                                    // allows us to use it in other files. 