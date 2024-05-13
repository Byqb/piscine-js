function mult2(n1) {
    return function(n2) {
        return n1 * n2;
    }
}
function add3(n1) {
    return function(n2) {
        return function(n3) {
            return n1 + n2 + n3;
        }
    }
}
function sub4(n1) {
    return function(n2) {
        return function(n3) {
            return function(n4) {
                return n1 - n2 - n3 - n4;
            }
        }
    }
}