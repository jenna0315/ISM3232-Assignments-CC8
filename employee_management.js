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
const employee1 = new Employee ("Joe", 9000, "Manager", "Customer Service");
console.log(`Task 1: Test Employee`);
console.log(employee1.details);