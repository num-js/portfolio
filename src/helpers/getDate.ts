const makeDate = (date?: string) => {
    if (date) {
        return new Date(date);
    }
    return new Date();
};

export const getDuration = (startDate?: string, endDate?: string) => {
    const start = makeDate(startDate);
    const end = makeDate(endDate);
    const startMonth = start.getFullYear() * 12 + start.getMonth();
    const endMonth = end.getFullYear() * 12 + end.getMonth();
    const monthInterval = endMonth - startMonth + 1;

    const yearsOfExperience = Math.floor(monthInterval / 12);
    const monthsOfExperience = monthInterval % 12;

    let date = '';
    if (yearsOfExperience) {
        date += yearsOfExperience;
        if (monthsOfExperience) {
            date += '.' + monthsOfExperience + 'Y';
        } else {
            date += 'Y';
        }
    } else {
        date += monthsOfExperience + 'M';
    }

    return date;
};

export const getMonthNameYear = (date?: string) => {
    const d = makeDate(date);
    const splitDate = d.toDateString().split(' ');
    return splitDate[1] + '-' + splitDate[3];
};

export const getCurrentYear = () => {
    return new Date().getFullYear().toString();
};
