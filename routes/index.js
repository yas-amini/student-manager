var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const students = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john@doe.com",
      phone: "070-1234533",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Doe",
      email: "jane@doe.com",
      phone: "070-1345543",
    },
    {
      id: 3,
      firstName: "Alice",
      lastName: "Doe",
      email: "Alice@doe.com",
      phone: "070-5345809",
    },
    {
      id: 4,
      firstName: "Minty",
      lastName: "Doe",
      email: "Minty@doe.com",
      phone: "070-5666809",
    },
  ];
  res.render("index", {
    title: "Studerande",
    students: students,
  });
});

module.exports = router;
