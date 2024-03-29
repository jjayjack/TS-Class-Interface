abstract class Department {
  static fiscalYear = 2022;
  protected employees: string[] = [];
  constructor(protected readonly id: string, public name: string) {}
  static createEmployee(name: string) {
    return { name: name };
  }
  abstract describe(): void;
  //must add abstract within class
  // console.log(`Department (${this.id}): ${this.name}`);

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
  describe() {
    console.log("IT Depeartment - ID " + this.id);
  }
}
class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;
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
  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }
  static getInstance() {
    if (this.instance) {
      return AccountingDepartment.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }
  describe(): void {
    console.log("Accounting Department - ID: " + this.id);
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
const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear);

const iT = new ITDepartment("d1", ["Max"]);
iT.addEmployee("Manuel");
iT.addEmployee("Jen");
iT.describe();
iT.printEmployeeInformation();

const accounting = AccountingDepartment.getInstance();
accounting.mostRecentReport = "Year End Report";
accounting.addReport("Sales Q1 Forecast");
console.log(accounting.mostRecentReport);
accounting.printReports();
accounting.addEmployee("Max");
accounting.addEmployee("Amanda");
accounting.describe();
// accounting.describe();
// accounting.printEmployeeInformation();
