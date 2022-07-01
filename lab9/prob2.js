class Student {
    #questionList;
    constructor(id) {
        this.id = id;
        this.questions = [];
    }
    addAnswer(question) {
        this.#questionList[this.#questionList.length] = question;
    }
    get questions() {
        return this.#questionList;
    }
    set questions(arr) {
        this.#questionList = arr;
    }
}

class Question {
    constructor(id, name) {
        this.id = id;
        this.questionName = name;
    }
}

class Quiz {
    constructor(ques = [], stus = []) {
        this.questions = ques;
        this.students = stus;
    }
    scoreStudentBySid(studentId) {
        let studentScore = this.students.filter(ele => {
            return ele.id === studentId;
        }).map(current => {
            let scores = this.questions.reduce((sum, question) => {
                let correctQuestion = current.questions.filter(ques => {
                    return (ques.id === question.id && ques.questionName === question.questionName);
                });
                return sum + (correctQuestion.length > 0?1:0);
            }, 0);
            return scores;
        });
        if (studentScore.length > 0) {
            return studentScore[0];
        } else {
            return 0;
        }
    }
    getAverageScore() {
        return this.students.reduce((avg, student) => {
            return avg + this.scoreStudentBySid(student.id)/this.students.length;
        }, 0);
    }
}

const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));
const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));
const students = [student1, student2];
const questions =[new Question(1, 'b'), new Question(2, 'a'), new
Question(3, 'b')];
const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2
let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5