
var mydb = require('./connect_database')

/******************************************************
*  READ DATA FROM TABLE
*    - This function takes a column, table, and id then
*      gives the coresponding information found there.
*
*    - This can only do one row at a time. 
*******************************************************/
function readDataFromTable(column = 0, table, id)
{   
    // If no column was provided, get all columns from table and id.
    if (column == 0)                
    {
        mydb.query('SELECT * FROM ' + table +
               ' WHERE id = ' + id, function(err, row)
               {
                    if (err) throw err;
                    // for testing purposes. 
                    //console.log(row[0])
                    return(row[0])
                })                       // This allows you to get
                                         // data from database. 
    }

    // Gets information from a specific column, table, and id. 
    else
    {
        mydb.query('SELECT ' + column + ' FROM ' + table +
               ' WHERE id = ' + id, function(err, row)
               {
                    if (err) throw err;

                    // for testing purposes. 
                    //console.log(row[0])
                    return(row[0])
                })
    }
}

// For testing purposes. Don't worry about this. 
console.log(readDataFromTable('description', 'categories', 1))
console.log(readDataFromTable(0, 'categories', 1))

// Makes the module accessable to other files. 
module.exports = readDataFromTable  