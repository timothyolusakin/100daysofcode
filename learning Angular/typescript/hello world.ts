class Hello
{
    FirstName: string
    LastName: string
    sayHello = function (): string
    {
        return "Hello" + this.FirstName + " " + this.LastName;
    }
}

function sayhello(firstName : string, lastName: string)
{
    var message:string = "Hello"
    message += firstName + " " + lastName
    alert(message);
}

var h:Hello = new Hello()
h.FirstName = "Timothy"
h.LastName = "Olusakin"
alert(h.sayHello());