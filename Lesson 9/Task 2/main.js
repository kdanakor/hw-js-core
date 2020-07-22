class Employee {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class EmpTable {
  constructor(employeeList) {
    this.employeeList = employeeList;
  }

  getCode() {
    return this.employeeList;
  }
}

let googleEmployeeList = [];
for (let i = 0; i < 10; i++) {
  googleEmployeeList[i] = new Employee('John' + i, Math.ceil(Math.random() * 80));
}

let generalEmpTable = new EmpTable(googleEmployeeList);

console.log(generalEmpTable.getCode());