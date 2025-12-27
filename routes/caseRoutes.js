const express = require("express");
const router = express.Router();
const { createCase , updateCaseStatus } = require("../controllers/caseController");
const { protect } = require("../middlewares/authMiddleware");
const { allowRoles } = require("../middlewares/roleMiddleware");

router.post("/create", createCase);
router.put("/:id/status", updateCaseStatus);

router.post(
    "/create",
    protect,
    allowRoles("admin"),
    createCase
);

router.put(
    "/:id/status",
    protect,
    allowRoles("dca"),
    updateCaseStatus
);

module.exports = router;
