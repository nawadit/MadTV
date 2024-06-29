const express = require("express");
// const authenticationRouterSignup = require('./routes/authentication/signup')
const app = express();
const signupRouter = require('./routes/authentication/signup')

// app.use('/signup', authenticationRouterSignup)

app.get('/', (req, res)=>{
    res.send('This is the home page')
    res.end
})

app.use('/signup', signupRouter)

app.listen(process.env.PORT || 3000, (req, res) => {
  console.log(`Server is listening to port ${process.env.PORT || 3000}`);
});
