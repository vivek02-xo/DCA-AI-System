const mongoose = require("mongoose");

const caseSchema = new mongoose.Schema({
    customerId: {
        type: String, // who owes money
        required: true
    },
    amountDue: {
        type: Number,
        required: true
    },
    daysOverdue: {
        type: Number, // late days
        required: true
    },
    status: {
        type: String,
        enum: ["new", "assigned", "in_progress", "resolved", "escalated"],
        default: "new"
    },
    priorityScore: {
        type: Number,
        default: 0
    },
    assignedDCA: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    slaDeadline: {
        type: Date
    }
}, { timestamps: true });

module.exports = mongoose.model("Case", caseSchema);
