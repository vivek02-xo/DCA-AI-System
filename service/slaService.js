function calculateSLADate(daysOverdue) {
    const now = new Date();
    let slaDays = 7;

    if (daysOverdue > 90) slaDays = 2;
    else if (daysOverdue > 30) slaDays = 4;

    now.setDate(now.getDate() + slaDays);
    return now;
}

module.exports = {calculateSLADate};
