module.exports = {
    format_time: (date) => {
        return date.toLocaleTimeString();
    },
    format_date: (date) => {
        //Using JavaScript Date methods, we get and format the month, date, and year
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
            // We add five years to the 'year' value to calculate the end date
            new Date(date).getFullYear()
        }`;
    },
};