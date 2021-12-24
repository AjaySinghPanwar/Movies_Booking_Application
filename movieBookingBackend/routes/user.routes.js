module.exports = app => {
  const users = require("../controllers/user.controller");

    var router = require("express").Router();

    router.post("/login", users.login);

    router.post("/sign-up", users.signUp);

    router.post("/logout", users.logout);

    router.post("/getCouponCode", users.getCouponCode);
    
    router.post("/bookShow", users.bookShow);
    
    app.use('/api', router);
  };
