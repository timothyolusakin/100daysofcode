// Declaring varriables in typescripts
let varname: number = 10;
let bln: boolean = true;
let fullname: string = "Timothy Olusakin"// you can write a string in single or double quotes

message = `Hello ${fullname}, How are you?`
message = "This is Line 1 \
            \n This is Line 2\
            \n This is Line 3"
alert(message)

//Declaring arrays in typescript

let lst1: number[] = [1,2,3,4,5,6]
let lst2: Array<number> = [1,2,3,4,5,6]

let rolst: ReadonlyArray<number> = lst1

//creatng a tuple
let x: [string, number] = ["hello",10]
//x= [10, "hello"] //error
alert(x[0])

// Any data type
let unknown: any = 10
unknown = "Sandeep"
unknown = false;

let v1 = number

if(v1 === undefined)
    v1 = 100

alert(v1)

// when the function doesn't not return data its known has a void datat type

// i can convert an any data type to string  for example
let a: any = 10
let s: string = <string> a
s = a as string
alert(s)
