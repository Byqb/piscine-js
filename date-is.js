function isValid(date) {
    if (new Date(date).toString() === 'Invalid Date') {
        return false;
    }
    if (typeof date !== 'number' && !(date instanceof Date)) {
        return false;
    }
    return true;
}

function isAfter(date1, date2) {
    let d1 = new Date(date1);
    let d2 = new Date(date2);
    if (d1 > d2) {
        return true;
    }
    return false;
}

function isBefore(date1, date2) {
    let d1 = new Date(date1);
    let d2 = new Date(date2);
    if (d1 < d2) {
        return true;
    }
    return false;
}
function isFuture(date) {
    if (!isValid(date)) {
        return false;
    }
    if (date.getTime() > Date.now()) {
        return true;
    }
    return false;
}
function isPast(date) {
    if (!isValid(date)) {
        return false;
    }
    if (date.getTime() < Date.now()) {
        return true;
    }
    return false;
}