const express = require("express");
const {
  signupUser,
  loginUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

const uploads = require("../middleware/upload");

const router = express.Router();

router.post("/signup", uploads.single("profilePic"), signupUser);
router.post("/login", loginUser);
router.get("/get-all", getAllUsers);
router.get("/get-by-id/:id", getUserById);
router.put("/update/:id", uploads.single("profilePic"), updateUser);
router.delete("/delete/:id", deleteUser);

module.exports = router;
