const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

exports.requireSignin = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.SECRET_KEY_USER);
    req.user = user;
    // console.log("user .......", user);
  } else {
    return res.status(400).json({ message: "Authorization required" });
  }
  next();
};