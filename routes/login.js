var express = require('express');
const { path } = require('../app');
var router = express.Router();

/* GET home page. */
// router.get('/', function (req, res, next) {
//   const values = [{
//     title: "Sofas",
//     image: "..\\images\\sofa.jpg",
//     description: "This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer."
//   }, {
//     title: "Curtains",
//     image: "..\\images\\curtain.jpg",
//     description: "This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer."
//   }, {
//     title: "Head-boards",
//     image: "..\\images\\headboard.webp",
//     description: "This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer."
//   }, {
//     title: "Modular-Kitchen",
//     image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.123homepaints.com%2Fmodular-kitchen&psig=AOvVaw2_rCwOgwHCI1q6tXR7IULq&ust=1665540966410000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIik-OON1_oCFQAAAAAdAAAAABAE",
//     description: "This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer."
//   }, {
//     title: "Jali",
//     image: "..\\images\\jali.jpg",
//     description: "This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer."
//   }, {
//     title: "Square-Pillow",
//     image: "..\\images\\square_pillow.jpg",
//     description: "This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer."
//   }, {
//     title: "3D-Wooden Designs",
//     image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpic.stonecontact.com%2Fpicture201511%2F20218%2F20218%2Fproduct%2F179305%2F3d-cnc-cutting-interior-design-wall-decor-panels-for-home-p898253-2b.jpg&imgrefurl=https%3A%2F%2Fwww.stonecontact.com%2Fproducts-898253%2F3d-cnc-cutting-interior-design-wall-decor-panels-for-home&tbnid=rH7nSF6IanZ-yM&vet=12ahUKEwi45pSEjtf6AhVdyKACHQP-BFMQMygeegUIARCMAg..i&docid=X3LPcOwUxWy4eM&w=600&h=600&q=3d%20cutting%20design&ved=2ahUKEwi45pSEjtf6AhVdyKACHQP-BFMQMygeegUIARCMAg",
//     description: "This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer."
//   }, {
//     title: "Accessories",
//     image: "..\\images\\book_shelf.jpg",
//     description: "This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer."
//   }];



//   res.render('index', { values });
// });

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
    req.session.login = true
    res.redirect('/home');
  } else {
    req.session.loginError = true;
    res.render('login', { display: "" });
  }

});



module.exports = router;
