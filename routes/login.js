var express = require('express');
// const { path } = require('../app');
var router = express.Router();



const email = 'mishal@mail.com';
const password = 'mishal123';


router.get('/', function (req, res, next) {
  if (req.session.login) {
    res.redirect('/home');
  } else {
    res.render('login', { loginError: req.session.loginError, display: "d-none" });
    req.session.loginError = false;
  }
});

router.post('/', function (req, res, next) {

  if (req.body.email == email && req.body.password == password) {
    req.session.login = true;
    res.redirect('/home');
  } else {
    req.session.loginError = true;
    res.render('login', { display: "" });
  }

});


module.exports = router;
