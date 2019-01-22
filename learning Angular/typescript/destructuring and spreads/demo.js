var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var input = [1, 2];
// Destructuring
var first = input[0];
var second = input[1];
var first = input[0], second = input[1];
//alert (first + " " + second)
var _a = [1, 2, 3, 4, 5], n1 = _a[0], rest = _a.slice(1);
alert(n1);
alert(rest);
var m1 = [1, 2, 3, 4, 5][0];
alert(m1);
var _b = [1, 2, 3, 4], m2 = _b[2], m3 = _b[3];
alert(m2 + " " + m3);
var _c = /^(\d\d\d\d)-(\d\d)-(\d\d)$/.exec("2017-07-01") || [0, 0, 0, 0], totalDate = _c[0], year = _c[1], month = _c[2], day = _c[3];
alert(totalDate + " " + year + " " + month + " " + day);
var ob = {
    a: "foo",
    b: 12,
    c: "bar"
};
var a = ob.a, b = ob.b;
alert(a + " " + b);
var A = ob.a, B = ob.b;
alert(A + " " + B);
var a = ob.a, rest1 = __rest(ob, ["a"]);
alert(a + " " + rest1.b + " " + rest1.c);
var user = {
    department: "DP1",
    name: "Timothy",
    favouriteCricketer: {
        first: {
            name: "John",
            comment: "Excellent batsman"
        },
        second: {
            name: "Toba",
            comment: "Excellent Wicket keeper"
        }
    }
};
var _d = user.favouriteCricketer, First = _d.first, Second = _d.second;
console.log(First.name + " " + First.comment);
console.log(Second.name + " " + Second.comment);
var user = {
    department: "DP1",
    name: "Timothy",
    favouriteCricketer: {
        first: {
            name: "John",
            comment: "Excellent batsman"
        },
        second: {
            name: "Toba",
            comment: "Excellent Wicket keeper"
        }
    },
    hobbies: ["playing cricket", "playing Chess"]
};
var _e = user.favouriteCricketer, First = _e.first, Second = _e.second, _f = user.hobbies, hob1 = _f[0], hob2 = _f[1];
console.log(First.name);
console.log(Second.name);
console.log(hob1);
console.log(hob2);
var users = [
    {
        department: "DP1",
        name: "Timothy",
    },
    {
        department: "DP2",
        name: "John",
    },
    {
        department: "DP3",
        name: "Toba",
    }
];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var _g = users_1[_i], n = _g.name, dept = _g.department;
    console.log("Name:" + n + ",Department:" + dept);
}
function foo(p1) {
    var a = p1.a, _a = p1.b, b = _a === void 0 ? 100 : _a;
    alert(a + " " + b);
}
foo({ a: "A" });
foo({ a: "A", b: 10 });
foo({});
function foo1(_a) {
    var _b = _a === void 0 ? { a: "" } : _a, _c = _b.a, a = _c === void 0 ? "" : _c, _d = _b.b, b = _d === void 0 ? 0 : _d;
    alert(a + " " + b);
}
foo1();
foo1({});
// spread
var a1 = [1, 2, 3];
var a2 = [4, 5, 6];
var a12 = [0].concat(a1, a2, [7]);
alert(a12);
var obs1 = { p1: "p1", p2: 10, p3: true };
var obs2 = __assign({}, obs1, { p4: 100 });
alert(obs2.p1);
