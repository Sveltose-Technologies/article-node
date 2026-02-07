const express = require("express");
const { registerAdmin, loginAdmin, logoutAdmin } = require("../controllers/admin.Controller");

const router = express.Router();

router.post("/signup",registerAdmin)
router.post("/login",loginAdmin)
router.post("/logout",logoutAdmin)

module.exports = router;