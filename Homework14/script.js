class Student {
    constructor(firstName, lastName, birthYear, grades = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = grades;
        this.attendance = new Array(25).fill(null);
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    getAverageGrade() {
        if (this.grades.length === 0) return 0;
        const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return sum / this.grades.length;
    }

    present() {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = true;
        } else {
            console.log("Attendance is already full.");
        }
    }

    absent() {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = false;
        } else {
            console.log("Attendance is already full.");
        }
    }

    summary() {
        const averageGrade = this.getAverageGrade();
        const attendanceCount = this.attendance.filter(entry => entry === true).length;
        const attendanceRate = attendanceCount / this.attendance.length;

        if (averageGrade > 90 && attendanceRate > 0.9) {
            return "Молодець!";
        } else if (averageGrade > 90 || attendanceRate > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}

const student1 = new Student('Ivan', 'Ivanov', 2000, [100, 90, 95]);
const student2 = new Student('Petro', 'Petrov', 1999, [85, 88, 92]);
const student3 = new Student('Anna', 'Sidorova', 2001, [70, 75, 80]);

student1.present();
student1.present();
student1.absent();

student2.present();
student2.present();
student2.present();
student2.absent();

student3.absent();
student3.absent();
student3.absent();

console.log(`${student1.firstName} ${student1.lastName}: ${student1.summary()}`);
console.log(`${student2.firstName} ${student2.lastName}: ${student2.summary()}`);
console.log(`${student3.firstName} ${student3.lastName}: ${student3.summary()}`);
