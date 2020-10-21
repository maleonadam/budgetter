const NewTransaction = require("../models/NewTransaction");

// @desc Get All Transactions
// @route GET /api/alltransactions
// @access Public
exports.getAllTransactions = async (req, res, next) => {
  try {
    const alltransactions = await NewTransaction.find();

    return res.status(200).json({
      success: true,
      count: alltransactions.length,
      data: alltransactions,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc Post New Transaction
// @route POST /api/alltransactions
// @access Public
exports.addNewTransaction = async (req, res, next) => {
  try {
    // const { name, amount } = req.body;

    const newtransaction = await NewTransaction.create({
      name: req.body.name,
      amount: req.body.amount,
    });

    // const newtransaction = await NewTransaction.create(req.body);

    return res.status(201).json({
      success: true,
      data: newtransaction,
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

// @desc Delete A Transaction
// @route DELETE /api/alltransactions/:id
// @access Public
exports.deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await NewTransaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({
        success: false,
        error: "No transaction found!",
      });
    } else {
      await transaction.remove();

      return res.status(200).json({
        success: true,
        data: {},
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
