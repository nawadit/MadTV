const express = require("express");
const signupFunction = require("../../controllers/authentication/signup");

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.post("/", signupFunction);

module.exports = router;
