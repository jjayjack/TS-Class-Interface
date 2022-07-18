class Department {
  name: string;
  private employees: string[] = []; //private = modifier
  constructor(n: string) {
    this.name = n;
  }
  describe(this: Department) {
    console.log("Department: " + this.name);
  } //Method

  addEmployee(employee: string) {
    // could add validation
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}
const accounting = new Department("Accounting");
accounting.addEmployee("Max");
accounting.addEmployee("Amanda");
// accounting.employees[2] = "Anna"; cannot add on to employees BECAUSE we've set class item as PRIVATE

accounting.describe();
accounting.printEmployeeInformation();
// const accountingCopy = { name: "s", describe: accounting.describe };
// accountingCopy.describe();
