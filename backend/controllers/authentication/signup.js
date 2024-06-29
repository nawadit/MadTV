const signupFunction = (req, res) => {
  let newUser = {
    name: req.body.fName + " "  + req.body.lName,
    email: req.body.email,
  };
  res.json(newUser);
  res.end();
};
module.exports = signupFunction;
