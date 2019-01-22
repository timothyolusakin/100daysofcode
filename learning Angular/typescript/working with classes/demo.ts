class Person
{
    FirstName: string
    LastName: string
    DateOfBirth: Date
    constructor(firstname: string, lastname:string, dateofBirth: Date){
        this.FirstName = firstname;
        this.LastName = lastname;
        this.DateOfBirth = dateofBirth
    }
    show() : string{
        return (`${this.FirstName} ${this.LastName}  ${this.DateOfBirth}` )
    }
}

class Person1
{
    FirstName: string
    LastName: string
    DateOfBirth: Date
    constructor(private firstname: string, private lastname:string, private dateofBirth: Date){
        this.FirstName = firstname;
        this.LastName = lastname;
        this.DateOfBirth = dateofBirth
    }
    show(){
        alert(`${this.FirstName} ${this.LastName}  ${this.DateOfBirth}` )
    }
}

class Employee extends Person{
    department:string
    salary:number
    constructor(firstname: string,lastname:string,dateofBirth: Date, department: string, salary:number){
        super(firstname,lastname,dateofBirth)
        this.FirstName = firstname;
        this.LastName = lastname;
        this.DateOfBirth = dateofBirth;
        this.department = department;
        this.salary  = salary;
    }
    show1() :string{
        let s:string = super.show()
        s += `${this.department}, ${this.salary}`
        return s;
    }
}

let p: Person = new Person("Timothy","Olusakin",new Date(1996,3,8))
let e:Employee = new Employee("John","Odiwe",new Date(1996,3,8),"traing",10000)

alert(e.show1())