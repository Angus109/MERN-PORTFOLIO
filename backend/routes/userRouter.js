import express from "express";
import {
  getUser,
  login,
  logout,
  register,
  updatePassword,
  updateProfile,
  forgotPassword,
  resetPassword,
  getUserForPortfolio,
} from "../controller/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

// const router = express.Router();
const userRouter = express.Router();


userRouter.post("/register", register)
userRouter.post("/login", login)
userRouter.post("/me", isAuthenticated, getUser)
userRouter.get("/logout", isAuthenticated, logout);
userRouter.post("/password/forgot", forgotPassword)
userRouter.get("/portfolio/me", getUserForPortfolio);
userRouter.put("/password/update", isAuthenticated, updatePassword);
userRouter.put("/me/profile/update", isAuthenticated, updateProfile);
userRouter.post("/password/forgot", forgotPassword);
userRouter.put("/password/reset/:token", resetPassword);




// router.post("/register", register);
// router.post("/login", login);
// router.get("/me", isAuthenticated, getUser);



// export default router;
export default userRouter
