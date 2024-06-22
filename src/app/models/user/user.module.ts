export interface UserModel {
  id: number;
  firstName: string;
  lastName: string;
  sal: number;
  email: string;
}

export class User {
  id; firstName; lastName; sal; email;
  constructor(id: number, firstName: string, lastName: string, sal: number, email: string) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.sal = sal;
      this.email = email;
  }
  fullName() {
      return this.lastName + "  " + this.firstName;
  }
  annualSal() {
      return this.sal * 12;
  }
}