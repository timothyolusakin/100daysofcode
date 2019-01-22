// Declaring varriables in typescripts
var varname = 10;
var bln = true;
var fullname = "Timothy Olusakin"; // you can write a string in single or double quotes
message = "Hello " + fullname + ", How are you?";
message = "This is Line 1 \
            \n This is Line 2\
            \n This is Line 3";
alert(message);
//Declaring arrays in typescript
var lst1 = [1, 2, 3, 4, 5, 6];
var lst2 = [1, 2, 3, 4, 5, 6];
var rolst = lst1;
//creatng a tuple
var x = ["hello", 10];
//x= [10, "hello"] //error
alert(x[0]);
// Any data type
var unknown = 10;
unknown = "Sandeep";
unknown = false;
var v1 = number;
if (v1 === undefined)
    v1 = 100;
alert(v1);
// when the function doesn't not return data its known has a void datat type
// i can convert an any data type to string  for example
var a = 10;
var s = a;
s = a;
alert(s);
