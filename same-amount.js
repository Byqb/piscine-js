function sameAmount(str, regExp1, regExp2) {
    regExp1 = new RegExp(regExp1, "g");
    regExp2 = new RegExp(regExp2, "g");
    const matches1 = (str.match(regExp1) || []).length;
    const matches2 = (str.match(regExp2) || []).length;
    return matches1 === matches2;
}
console.log(!sameAmount("qqq ", /q /, /qqqqqqq/));