let input = [1,2]

// Destructuring
let first : number = input[0]

let second : number = input[1]

let [first, second] : number = input

//alert (first + " " + second)

let [n1, ...rest] = [1,2,3,4,5]
alert(n1)
alert(rest)

let [m1] = [1,2,3,4,5]
alert(m1)

let[, ,m2,m3] = [1,2,3,4]
alert(m2+ " " + m3)

let [totalDate, year, month, day] = /^(\d\d\d\d)-(\d\d)-(\d\d)$/.exec("2017-07-01") || [0,0,0,0]
alert(totalDate + " " + year + " " + month + " " + day)

let ob = {
    a : "foo",
    b : 12,
    c : "bar"
}

let {a, b} = ob;
alert(a + " " + b)

let {a: A, b: B} = ob;
alert(A + " " + B)

let {a,...rest1} = ob
alert(a + " " + rest1.b + " " + rest1.c)

let user = {
    department: "DP1",
    name : "Timothy",
    favouriteCricketer:{
        first:{
            name : "John",
            comment:"Excellent batsman"
        },
        second:{
          name : "Toba",
          comment : "Excellent Wicket keeper"
        }
    }
};

let {favouriteCricketer:{first : First,second : Second}} = user
console.log(First.name + " " + First.comment);
console.log(Second.name+ " " + Second.comment);

let user = {
    department: "DP1",
    name : "Timothy",
    favouriteCricketer:{
        first:{
            name : "John",
            comment:"Excellent batsman"
        },
        second:{
            name : "Toba",
            comment : "Excellent Wicket keeper"
        }
    },
    hobbies:["playing cricket", "playing Chess"]
};

let { favouriteCricketer: {first: First, second: Second}, hobbies:[hob1, hob2]} = user
console.log(First.name)
console.log(Second.name)
console.log(hob1)
console.log(hob2)

let users = [
    {
        department:"DP1",
        name:"Timothy",
    },
    {
        department:"DP2",
            name:"John",
    },
    {
        department:"DP3",
            name:"Toba",
    }
];

for (var{name:n,department:dept} of users){
    console.log("Name:" + n + ",Department:"+ dept);
}

// Default values for parameters and optioonsl

type c={a:string, b?:number}

function foo(p1:c )// b is an optional parameter while a has to be inputed
{
    let{a,b = 100} = p1;
    alert(a +" "+ b)
}

foo({a:"A"});
foo({a:"A",b:10});
foo({})

function foo1({a="",b = 0} = {a:""}){ // a as a default value
    alert(a + " " + b)
}
foo1()
foo1({})

// spread

let a1 = [1,2,3]
let a2 = [4,5,6]

let a12 = [0,...a1,...a2,7]
alert(a12)

let obs1 = {p1:"p1",p2:10,p3:true};
let obs2 = {...obs1,p4:100}
alert(obs2.p1 )