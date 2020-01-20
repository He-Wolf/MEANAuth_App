const express = require("express");
const router = express.Router();

router.get("/register", (req, res, next)=>{
    res.send("Register");
});

router.post("/authenticate", (req, res, next)=>{
    res.send("Authenticate");
});

router.get("/profile", (req, res, next)=>{
    res.send("Profile");
});

router.get("/validate", (req, res, next)=>{
    res.send("Validate");
});

module.exports = router;