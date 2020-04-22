import moment from 'moment'

export const checkDate = (year, month, day) => {
    const date = moment(year + "-" + month.padStart(2, "0") + "-" + day.padStart(2, "0"));
    return date.isValid()
}

export const required = (value) => {
    return value.length > 0
}
