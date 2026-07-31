const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Successfully created the app")
})

app.listen(3000, () =>{
    console.log("The app running on the 3000 port")
})