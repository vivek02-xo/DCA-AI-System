const express = require("express");
const router = express.Router();
const { createCase , updateCaseStatus } = require("../controllers/caseController");

router.post("/create", createCase);
router.put("/:id/status", updateCaseStatus);

module.exports = router;
