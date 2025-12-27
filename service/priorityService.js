function calculatePriority(caseData) {
    let score = 0;

    // higher amount
    if (caseData.amountDue > 100000) score += 40;
    else if (caseData.amountDue > 50000) score += 30;
    else score += 10;

    // older cases
    if (caseData.daysOverdue > 90) score += 40;
    else if (caseData.daysOverdue > 30) score += 20;
    else score += 10;

    return score;
}

module.exports = {calculatePriority};
