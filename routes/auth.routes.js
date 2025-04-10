import { Router } from "express";

const authRouter = Router();
// Sign Up
authRouter.post("/sign-up", (req, res) => {
  res.send({ 
    success: true,
    message: "Sign up route" 
  });
});

// Sign In
authRouter.post("/sign-in", (req, res) => {
  res.send({ 
    success: true,
    message: "Sign in route" 
  });
});

// Sign Out
authRouter.post("/sign-out", (req, res) => {
  res.send({ 
    success: true,
    message: "Sign out route" 
  });
});
export default authRouter;
