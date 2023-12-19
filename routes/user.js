import express from "express";

import {  getMyProfile,  login,logout, register} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";
const router=express.Router();



    router.post("/new",register);
    router.post("/login",login);
    router.get("/logout",logout);

    router.get("/me",isAuthenticated, getMyProfile);

   

    
///Dynamic routing to be always placed in last
// router.get("/userid/:id",getUserbyId);
// router.put("/userid/:id",updateUserbyId);
// router.delete("/userid/:id",deleteUserbyId);



    



export default router;