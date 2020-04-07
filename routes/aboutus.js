var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.render("aboutus", {
    title: "Our Story, mission and philosophy",
    navabout: true,
  });
});

module.exports = router;
