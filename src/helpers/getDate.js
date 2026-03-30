const makeDate = (date) => {
    if (date) {
        return new Date(date);
    }
    return new Date();
}

export const getDuration = (startDate, endDate) => {
    startDate = makeDate(startDate);
    // endDate = endDate ? makeDate(endDate) : new Date();
    endDate = makeDate(endDate);
    const startMonth = startDate.getFullYear() * 12 + startDate.getMonth();
    const endMonth = endDate.getFullYear() * 12 + endDate.getMonth();
    const monthInterval = (endMonth - startMonth) + 1;

    const yearsOfExperience = Math.floor(monthInterval / 12);
    const monthsOfExperience = monthInterval % 12;

    let date = "";
    if (yearsOfExperience) {
        date += yearsOfExperience;
        if (monthsOfExperience) {
            date += "." + monthsOfExperience + "Y";
        } else {
            date += "Y"
        }
    } else {
        date += monthsOfExperience + "M";
    }

    return date;
}

export const getMonthNameYear = (date) => {
    date = makeDate(date);
    const splitDate = date.toDateString().split(' ')
    return splitDate[1] + "-" + splitDate[3]
}

export const getCurrentYear = () => {
    return new Date().getFullYear().toString();
}