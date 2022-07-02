function StudentInfo(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
    this.grades = [];
}
StudentInfo.prototype.inputNewGrade = function(newGrade) {
    this.grades.push(newGrade);
}

StudentInfo.prototype.computeAverageGrade = function() {
    return this.grades.reduce((avg, grade) => avg + grade/this.grades.length, 0);
}

let studentsInfo = [new StudentInfo('Anh', 'Nguyen'), new StudentInfo('Abc', 'Def')];
studentsInfo[0].inputNewGrade(50);
studentsInfo[0].inputNewGrade(80);
studentsInfo[0].inputNewGrade(100);
studentsInfo[1].inputNewGrade(60);
studentsInfo[1].inputNewGrade(70);
studentsInfo[1].inputNewGrade(90);
studentsInfo[1].inputNewGrade(50);
console.log(studentsInfo[0].computeAverageGrade());
console.log(studentsInfo[1].computeAverageGrade());
//console.log(studentsInfo);