const mysql = require ("mysql2");

const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password:"Naveenkumar1",
    database:"todo"
})

db.connect((err)=>{
    if(err){
        console.error("Data base connection failed",err)
    } else {
        console.log("connection successfull")
    }
});

module.exports = db;