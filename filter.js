function filter(arr, action) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (action(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}
function reject(arr, action) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!action(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}
function partition(arr, action) {
    return [filter(arr, action), reject(arr, action)];
}