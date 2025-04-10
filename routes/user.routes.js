import { Router } from "express";

const userRouter = Router();

// Get all users
userRouter.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    data: [], // Mock array (replace with actual users from DB)
    message: "All users retrieved successfully",
  });
});

// Get single user by ID
userRouter.get("/:id", (req, res) => {
  const userId = req.params.id;
  res.status(200).json({
    success: true,
    data: { id: userId }, // Mock data (replace with DB query)
    message: `User ${userId} retrieved successfully`,
  });
});

// Create new user
userRouter.post("/", (req, res) => {
  const newUser = req.body; // Assuming body-parser middleware is used
  res.status(201).json({
    success: true,
    data: newUser, // Mock response (replace with DB insertion)
    message: "User created successfully",
  });
});

// Update user by ID
userRouter.put("/:id", (req, res) => {
  const userId = req.params.id;
  const updatedData = req.body;
  res.status(200).json({
    success: true,
    data: { id: userId, ...updatedData }, // Mock merged data
    message: `User ${userId} updated successfully`,
  });
});

// Delete user by ID
userRouter.delete("/:id", (req, res) => {
  const userId = req.params.id;
  res.status(200).json({
    success: true,
    data: { id: userId },
    message: `User ${userId} deleted successfully`,
  });
});
export default userRouter;
