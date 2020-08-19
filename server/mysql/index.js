const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nowusers"
});

const sqlFn = (sql, arr, callback) => {
    connection.query(sql, arr, function(error, result){
        if(error){
            console.log(new Error(error));
        }else{
            callback(result);
        }
    });
}

module.exports = sqlFn;