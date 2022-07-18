class Department {
  protected employees: string[] = [];
  constructor(private readonly id: string, public name: string) {}
  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT"); //MUST be included to set new parameters
    this.admins = admins;
  }
}
class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }
  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
  addReport(text: string) {
    this.reports.push(text);
  }
  printReports() {
    console.log(this.reports);
  }
}
const newIT = new ITDepartment("d1", ["Max"]);
const accounting = new AccountingDepartment("d2", []);
accounting.addReport("Something went wrong");
accounting.printReports();
newIT.addEmployee("Manuel");
newIT.addEmployee("Jen");
accounting.addEmployee("Max");
accounting.addEmployee("Amanda");

newIT.describe();
newIT.printEmployeeInformation();
accounting.describe();
accounting.printEmployeeInformation();
