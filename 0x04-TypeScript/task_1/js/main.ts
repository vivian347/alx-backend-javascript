interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    readonly fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    readonly location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number
}


function printTeacher(firstName: string, lastName: string) {
    const name = `${firstName.charAt(0)}. ${lastName}`;
    return name;
}

interface printTeacherFunction {
    (firstName: string, lastName: string):string;
}

const myPrintTeacher: printTeacherFunction = printTeacher;

interface myStudentClass {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

interface MyConstructor {
    new (firstName: string, lastName: string): myStudentClass;
}

class StudentClass implements myStudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return ("Currently working");
    }

    displayName(): string {
        return `${this.firstName}`;
    }
}