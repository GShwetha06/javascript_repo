/*Write a JavaScript program to:
a) filter employees according to department = IT
b) filter employees who earn a salary < 65000 */

let employees = [
    {
    "id": 1,
    "name":"Abhinav",
    "department":"IT",
    "Salary":75000
    },
    {
    "id": 2,
    "name":"Gaurav",
    "department":"Sales",
    "Salary":52000
    },
    {
    "id": 3,
    "name":"Raj",
    "department":"IT",
    "Salary":64000
    }]

    function filterForDept(employees){
        let result = employees.filter(checkDept);

        console.log(result);
    }

    function checkDept(employee){
        if(employee.department === 'IT')
        return employee
    }

    function filterForSalary(employees){
        let result = employees.filter(checkSalary);

        console.log(result);
    }

    function checkSalary(employee){
        if(employee.Salary < 65000)
        return employee
    }

    console.log("Employees belonging to IT department: ");
    filterForDept(employees);
    console.log("Employees whose salary is less than 65000");
    filterForSalary(employees);