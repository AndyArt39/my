export default class Student {
  constructor(surname, name, middleName, birthDate, beginningTraining, department) {
    this.surname = surname
    this.name = name
    this.middleName = middleName
    this.birthDate = birthDate
    this.beginningTraining = beginningTraining
    this.department = department
  }

  get fullName() {
    return this.surname + ' ' + this.name + ' ' + this.middleName
  }

  getBirthDate() {
    const yyyy = this.birthDate.getFullYear();
    let mm = this.birthDate.getMonth() + 1;
    let dd = this.birthDate.getDate();
    if (mm < 10) mm = '0' + mm;
    if (dd < 10) dd = '0' + dd;
    return dd + '.' + mm + '.' + yyyy;
  }

  getAge() {
    const today = new Date();
    let age = today.getFullYear() - this.birthDate.getFullYear();
    let mm = today.getMonth() - this.birthDate.getMonth();
    if (mm < 0 || (mm === 0 && today.getDate() < this.birthDate.getDate())) {
      age--;
    };
    if (age % 10 === 1) return `(${age} год)`;
    if (age % 10 === 0 || (age % 10 > 4 && age % 10 <= 9)) return `(${age} лет)`;
    if (age % 10 > 1 && age % 10 < 5) return `(${age} года)`;
  }

  getPeriodStudy() {
    const endTraining = this.beginningTraining + 4;
    if (endTraining === new Date().getFullYear() && new Date().getMonth() < 8) {
      return this.beginningTraining + '-' + endTraining + ` (${endTraining - this.beginningTraining} курс)`;
    } if (endTraining > new Date().getFullYear() && new Date().getMonth() < 8) {
      return this.beginningTraining + '-' + endTraining + ` (${new Date().getFullYear() - this.beginningTraining} курс)`;
    } if (endTraining > new Date().getFullYear() && new Date().getMonth() >= 8) {
      return this.beginningTraining + '-' + endTraining + ` (${new Date().getFullYear() - this.beginningTraining + 1} курс)`;
    } else {
      return this.beginningTraining + '-' + endTraining + ' закончил';
    }
  }
}
