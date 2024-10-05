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
Salary: ${this.salary}
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
    
    get details () {
        return `Department Name: ${this.name}`};
};

const department1 = new Department ("Customer Service")
const employee2 = new Employee ("Kate", 4000, "Assistant", "Customer Service")

department1.addEmployee(employee1);
department1.addEmployee(employee2);
let TotalCustomerServiceSalary = department1.getTotalDepartmentSalary();

console.log(`Task 2: Create a Department Class`);
console.log(department1.details);
console.log(`Total Salary: $${TotalCustomerServiceSalary}`);

