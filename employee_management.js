//Task 1:Create an Employee Class
class Employee {
    constructor(name,salary,position,department) {
        this.name = name
        this.salary = salary
        this.position = position
        this.department = department
    };
get details () {
   return `Name: ${this.name}
Salary: $${this.salary}
Position: ${this.position}
Department: ${this.department}` 
    };
};
//test use of getter
const employee1 = new Employee ("Joe", 9000, "Representative", "Customer Service");
console.log(`Task 1: Test Employee`);
console.log(employee1.details);


//Task 2: Create a Department Class
class Department {
    constructor(name,employees) {
        this.name = name
        this.employees = []};

    addEmployee(employee){
    this.employees.push(employee)
    };

    getTotalDepartmentSalary () {
        return this.employees.reduce((total,employee)=>
        total + employee.salary,0)
    };
};

const department1 = new Department ("Customer Service")
const employee2 = new Employee ("Kate", 4000, "Assistant", "Customer Service")

department1.addEmployee(employee1);
department1.addEmployee(employee2);
let TotalCustomerServiceSalary = department1.getTotalDepartmentSalary();

//test creation of department class
console.log(`Task 2: Create a Department Class`);
console.log(department1)
console.log(`Total Customer Service Department Salary: $${TotalCustomerServiceSalary}`);


//Task 3: Create a Manager Class that Inherits from Employee
class Manager extends Employee {
    constructor(name,salary,position,department,bonus){
    super(name,salary,position,department)
    this.bonus = bonus
}
get details () {
    return `${super.details}
Bonus: $${this.bonus}`
     };
 };
 //create the customer service manager and add him to department 1
 const CustomerServiceManager = new Manager ("Bob", 15000, "Manager", "Customer Service", 2000)
 department1.addEmployee(CustomerServiceManager)


//find total salary after adding the manager
 TotalCustomerServiceSalary = department1.getTotalDepartmentSalary();

 console.log(`Task 3: Create a Manager Class`);
 console.log(`Test New Manager Details:`)
 console.log(CustomerServiceManager.details)
 console.log(`Test New Customer Service Department Salary:`)
 console.log(`Total Salary: $${TotalCustomerServiceSalary}`);
 
