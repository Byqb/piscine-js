function every(arr, action) {
    for (let i = 0; i < arr.length; i++) {
        if (!action(arr[i])) {
            return false;
        }
    }
    return true;
}
function some(arr, action) {
    for (let i = 0; i < arr.length; i++) {
        if (action(arr[i])) {
            return true;
        }
    }
    return false;
}
function none(arr, action) {
    return !some(arr, action);
}