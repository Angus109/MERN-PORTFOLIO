import { User } from "../models/userSchema.js";
import { catchAsyncErrors } from "./catchAsyncErrors.js";
import ErrorHandler from "./error.js";
import jwt from "jsonwebtoken";


export const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  
  const authHeader = req.cookies.token || req.headers.authorization;
  // console.log(authHeader)
  
  const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

  if (!authHeader) {
    return next(new ErrorHandler("User not Authenticated!", 400) );
  }

   const token = authHeader.split(' ')[1] || authHeader
  //  console.log(token)


  const decoded = jwt.verify(token, JWT_SECRET_KEY);
  // req.user = await User.findById(decoded.id);

   // Fetch user from database using decoded user ID:
   const user = await User.findById(decoded.id);
   if (!user) {
     return res.status(401).json({ message: 'Unauthorized: Invalid token' });
   }

   //  Attach user object to request for access in subsequent handlers:
   req.user = user;
  next();
});
