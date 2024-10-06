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
    calculateTotalSalaryWithBonus() {
        return this.employees.reduce((total,employee)=> {
            if (employee instanceof Manager) {
                return total + employee.salary + employee.bonus
        };
        return total + employee.salary
    },0);
};
}

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
 
//Task 4: Handle bonuses in the department salary calculation
let TotalCustomerServiceSalaryWithBonus = department1.calculateTotalSalaryWithBonus()
console.log(`Task 4: Handle bonuses`)
console.log(`Display of Customer Service Department:`)
console.log(employee1.details)
console.log(employee2.details)
console.log(CustomerServiceManager.details)
console.log(`Total Salary for Customer Service: ${TotalCustomerServiceSalary}`)
console.log(`Total Salary with Manager Bonus: ${TotalCustomerServiceSalaryWithBonus}`)

//Task 5: Create and manage departments and employees
const engineering = new Department("Engineering");

const marketing = new Department("Marketing");

const alice = new Employee("Alice", 80000, "Developer", "Engineering");

const john = new Employee("Joe", 75000, "Designer", "Marketing");

const charlie = new Manager("Charlie", 120000, "Engineering Manager", "Engineering", 20000);

const diana = new Manager("Diana", 130000, "Marketing Manager", "Marketing", 25000);

//Add employees to departments

engineering.addEmployee(alice);

engineering.addEmployee(charlie);

marketing.addEmployee(john);

marketing.addEmployee(diana);

//Test the addition
console.log(`Task 5: Create and manage departments and employees`)

console.log(`Display Details of Employees and Managers:`)

console.log(alice.details)

console.log(john.details)

console.log(charlie.details)

console.log(diana.details)

console.log(`Total salary for Engineering: $${engineering.getTotalDepartmentSalary()}`);

console.log(`Total salary with bonuses for Engineering: $${engineering.calculateTotalSalaryWithBonus()}`);

console.log(`Total salary for Marketing: $${marketing.getTotalDepartmentSalary()}`);

console.log(`Total salary with bonuses for Marketing: $${marketing.calculateTotalSalaryWithBonus()}`);