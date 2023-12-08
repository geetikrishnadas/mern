const express = require("express");
const router = express.Router();

const router =require("./router/auth-router");

app. use("/api/auth",router);



app.get("/",(req,res)=>{
	 res.status(200).send("welcome to the world using router");
});


module.exports = router;


