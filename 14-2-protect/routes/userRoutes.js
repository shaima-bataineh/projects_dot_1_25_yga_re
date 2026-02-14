const express = require("express");
const router = express.Router();
const { register, login, updateUser, getAllUsers } = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const userController = require("../controllers/userController");

router.post("/register", register);
router.post("/login", login);
router.put("/:id", authMiddleware, updateUser); // حماية التحديث
router.get("/", authMiddleware, getAllUsers); // حماية الداتا الحساسة
// DELETE /users/:id
router.delete("/:id", authMiddleware, userController.deleteUser);

module.exports = router;
