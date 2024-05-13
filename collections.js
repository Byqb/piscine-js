function arrToSet(arr) {
    return new Set(arr);
}
function arrToStr(arr) {
    return arr.join('');
}
function setToArr(set) {
    return Array.from(set);
}
function setToStr(set) {
    return Array.from(set).join('');
}
function strToArr(str) {
    return Array.from(str);
}
function strToSet(str) {
    return new Set(str);
}
function mapToObj(map) {
    const obj = {};
    for (let [key, value] of map.entries()) {
        obj[key.toString()] = value;
    }
    return obj;
}
function objToArr(obj) {
    return Object.values(obj);
}
function objToMap(obj) {
    return new Map(Object.entries(obj));
}
function arrToObj(arr) {
    return Object.assign({}, arr);
}
function strToObj(str) {
    return Object.assign({}, Array.from(str));
}
function superTypeOf(value) {
    const type = typeof value;
    if (value === undefined) {
        return 'undefined';
    }
    ////////////
    if (Array.isArray(value)) {
        return 'Array';
    } else if (value instanceof Set) {
        return 'Set';
    } else if (value instanceof Map) {
        return 'Map';
    } else if (type === 'object' && value === null) {
        return 'null';
    } else {
        return type.charAt(0).toUpperCase() + type.slice(1);
    }
}