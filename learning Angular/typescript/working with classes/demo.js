var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstname, lastname, dateofBirth) {
        this.FirstName = firstname;
        this.LastName = lastname;
        this.DateOfBirth = dateofBirth;
    }
    Person.prototype.show = function () {
        return (this.FirstName + " " + this.LastName + "  " + this.DateOfBirth);
    };
    return Person;
}());
var Person1 = /** @class */ (function () {
    function Person1(firstname, lastname, dateofBirth) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.dateofBirth = dateofBirth;
        this.FirstName = firstname;
        this.LastName = lastname;
        this.DateOfBirth = dateofBirth;
    }
    Person1.prototype.show = function () {
        alert(this.FirstName + " " + this.LastName + "  " + this.DateOfBirth);
    };
    return Person1;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(firstname, lastname, dateofBirth, department, salary) {
        var _this = _super.call(this, firstname, lastname, dateofBirth) || this;
        _this.FirstName = firstname;
        _this.LastName = lastname;
        _this.DateOfBirth = dateofBirth;
        _this.department = department;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.show1 = function () {
        var s = _super.prototype.show.call(this);
        s += this.department + ", " + this.salary;
        return s;
    };
    return Employee;
}(Person));
var p = new Person("Timothy", "Olusakin", new Date(1996, 3, 8));
var e = new Employee("John", "Odiwe", new Date(1996, 3, 8), "traing", 10000);
alert(e.show1());
