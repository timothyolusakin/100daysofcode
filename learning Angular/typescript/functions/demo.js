function Add(a, b, c) {
    if (!c)
        c = 0;
    return a + b + c;
}
function Add1(a, b, c) {
    if (c === void 0) { c = 0; }
    return a + b + c;
}
alert(Add(10, 20));
