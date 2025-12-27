const DcaPerformance = require("../models/DcaPerformance");

async function assignBestDCA() {
    const dcas = await DcaPerformance.find()
        .populate("dca")
        .sort({
            totalCasesResolved: -1,
            slaBreaches: 1
        });

    if (dcas.length === 0) return null;

    return dcas[0].dca;
}

module.exports = {assignBestDCA};
