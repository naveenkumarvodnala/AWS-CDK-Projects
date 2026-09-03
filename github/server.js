const express = require("express");

const app = express();

app.get("/", (req,res) => {
    res.json({
        message: "Version 2 - Automatically deployed!",
        environment: process.env.NODE_ENV || "development"
    });
});

app.get('/health',(req,res) => {
    res.json({
        status : "UP"
    })
});

app.listen(3000, ()=>{
    console.log("server runing on the port 3000")
});

module.exports = app;