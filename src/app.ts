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
  private lastReport: string;
  // Property which you execute when called
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No reports found");
  }
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in valid value!");
    }
    this.addReport(value);
  }
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }
  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReports() {
    console.log(this.reports);
  }
}
const newIT = new ITDepartment("d1", ["Max"]);
const accounting = new AccountingDepartment("d2", []);
accounting.mostRecentReport = "Year End Report";
accounting.addReport("Sales Q1 Forecast");
console.log(accounting.mostRecentReport);
accounting.printReports();
newIT.addEmployee("Manuel");
newIT.addEmployee("Jen");
accounting.addEmployee("Max");
accounting.addEmployee("Amanda");

newIT.describe();
newIT.printEmployeeInformation();
accounting.describe();
accounting.printEmployeeInformation();
