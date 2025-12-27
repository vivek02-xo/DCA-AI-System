const mongoose = require("mongoose");

const dcaPerformanceSchema = new mongoose.Schema({
    dca: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    totalCasesAssigned: {
        type: Number,
        default: 0
    },
    totalCasesResolved: {
        type: Number,
        default: 0
    },
    slaBreaches: {
        type: Number,
        default: 0
    },
    averageResolutionTime: {
        type: Number, 
        default: 0
    }
}, { timestamps: true });

module.exports = mongoose.model("DcaPerformance", dcaPerformanceSchema);
