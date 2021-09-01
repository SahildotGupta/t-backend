var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");
const { signout, signup, signin, isSignedIn } = require("../controllers/auth");

router.post(
  "/signup",
  [
    check("name", "name should be alteast 3 char").isLength({ min: 3 }),
    check("email", "email is required").isEmail(),
    check("password", "password is required").isLength({ min: 1 }),
  ],
  signup
);

router.post(
  "/signin",
  [
    check("email", "email is required").isEmail(),
    check("password", "password should be alteast 3 char").isLength({ min: 3 }),
  ],
  signin
);

router.get("/signout", signout);

router.get("/testroute", isSignedIn, (res, req) => {
  res.send("A Protected Route");
});

module.exports = router;
