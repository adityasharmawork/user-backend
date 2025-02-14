import User from "../models/userModel.js";


export const getUser = async (req, res) => {
  const query = req.params.query;

  try {
    const user = await User.findOne({ 
      $or: [{ username: query }, { email: query }]
    }).select("-password");

    if (user) res.json(user);
    else res.status(404).json({ 
      message: "User not found" 
    });

  } catch (error) {
    res.status(500).json({ 
      message: error.message 
    });
  }
};
