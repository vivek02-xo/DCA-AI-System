const Case = require("../models/Case");
const { calculatePriority } = require("../services/priorityService");
const { assignBestDCA } = require("../services/assignmentService");
const { calculateSLADate } = require("../services/slaService");

exports.createCase = async (req, res) => {
    try {
        const { customerId, amountDue, daysOverdue } = req.body;

        const priorityScore = calculatePriority({ amountDue, daysOverdue });

        const assignedDCA = await assignBestDCA();

        const slaDeadline = calculateSLADate(daysOverdue);

        const newCase = new Case({
            customerId,
            amountDue,
            daysOverdue,
            priorityScore,
            assignedDCA,
            slaDeadline,
            status: "assigned"
        });

        await newCase.save();

        res.status(201).json({
            message: "Case created successfully",
            case: newCase
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateCaseStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const updatedCase = await Case.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );

        res.json({
            message: "Case status updated",
            case: updatedCase
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
