const express = require("express");
const router = express.Router();

const {
  getAllTransactions,
  addNewTransaction,
  deleteTransaction,
} = require("../controllers/alltransactions");

router.route("/").get(getAllTransactions);
router.route("/").post(addNewTransaction);
router.route("/:id").delete(deleteTransaction);

module.exports = router;
