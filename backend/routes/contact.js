const express = require("express");
const router = express.Router();
const Contact = require("../models/contact"); // model

router.post("/", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();

    res.json({ message: "Data saved successfully ✅" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error" });
  }
});

module.exports = router;