const NewUser = require("../models/NewUser");

// @desc Post New User
// @route POST /api/allusers
// @access Public
exports.addNewUser = async (req, res, next) => {
  try {
    // const { name, amount } = req.body;

    const newuser = await NewUser.create({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
    });

    // const newuser = await NewUser.create(req.body);

    return res.status(201).json({
      success: true,
      data: newuser,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};
