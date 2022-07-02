let studentInfo = {
    firstName: '',
    lastName: '',
    grades: [],
    inputNewGrade(newGrade) {
        this.grades.push(newGrade);
    },
    computeAverageGrade() {
        return this.grades.reduce((avg, grade) => avg + grade/this.grades.length, 0);
    }
}

let studentsInfo = [Object.create(studentInfo), Object.create(studentInfo)];
studentsInfo[0].firstName = 'Anh';
studentsInfo[0].lastName = 'Nguyen';
studentsInfo[0].inputNewGrade(50);
studentsInfo[0].inputNewGrade(80);
studentsInfo[0].inputNewGrade(100);
studentsInfo[1].firstName = 'ABC';
studentsInfo[1].lastName = 'Def';
studentsInfo[1].inputNewGrade(60);
studentsInfo[1].inputNewGrade(70);
studentsInfo[1].inputNewGrade(90);
studentsInfo[1].inputNewGrade(50);
console.log(studentsInfo[0].computeAverageGrade());
console.log(studentsInfo[1].computeAverageGrade());
//console.log(studentsInfo);