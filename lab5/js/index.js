function sum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] > 20) sum += arr[i];
    }
    return sum;
}

const arr = [12, 54, 46, 23, 15, 46];
console.log(sum(arr));

const getNewArray = function (arr) {
    const newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if (arr[i].length >= 5 && arr[i].includes('a')) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

const strArr = ['abc', 'asglk', 'lkgjlw', 'aslkgj', 'kdasdgl'];
console.log(getNewArray(strArr));

const students = [
    { name: 'Quincy', grades: [99, 88], courses:['cs301', 'cs303']},
    { name: 'Jason', grades: [29, 38], courses:['cs201', 'cs203']},
    { name: 'Alexis', grades: [79, 78], courses:['cs105', 'cs211'] },
    { name: 'Sam', grades: [91, 82], courses:['cs445', 'cs303'] },
    { name: 'Katie', grades: [66, 77], courses:['cs303', 'cs477'] }
  ];

const newStds = students.filter(function(student) {
    return student.courses.includes('cs303');
});
console.log(newStds);


