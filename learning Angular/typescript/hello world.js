var Hello = /** @class */ (function () {
    function Hello() {
        this.sayHello = function () {
            return "Hello" + this.FirstName + " " + this.LastName;
        };
    }
    return Hello;
}());
function sayhello(firstName, lastName) {
    var message = "Hello";
    message += firstName + " " + lastName;
    alert(message);
}
var h = new Hello();
h.FirstName = "Timothy";
h.LastName = "Olusakin";
alert(h.sayHello());
