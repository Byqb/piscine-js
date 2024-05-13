function fold(arr, func, action) {
    for (var i = 0; i < arr.length; i++) {
        action = func(action, arr[i], i, arr);
    }
    return action;
}
function foldRight(arr, func, action) {
    for (var i = arr.length - 1; i >= 0; i--) {
        action = func(action, arr[i], i, arr);
    }
    return action;
}
function reduce(arr, func) {
    let action = arr[0];
    for (var i = 1; i < arr.length; i++) {
        action = func(action, arr[i], i, arr);
    }
    return action;
}
function reduceRight(arr, func) {
    let action = arr[arr.length - 1];
    for (var i = arr.length - 2; i >= 0; i--) {
        action = func(action, arr[i], i, arr);
    }
    return action;
}