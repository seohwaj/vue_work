/* 객체 구조분해 */

let emp = {
    empName: 'scott',
    dept: '개발',
    hireDate: '2019-11-01'
}
// let empName = emp.empName;
let {empName, dept} = emp
console.log(empName, dept)


/* 객체 복사 */

// 얕은 복사
// let emp1 = emp;
// emp.empName = 'kim';
// console.log('객체 복사', emp1.empName, emp.empName);

// 깊은 복사
let emp1 = {...emp, dt: '2015'};
emp.empName = 'kim';
console.log('객체 복사', emp1.empName, emp.empName);


/* 배열 구조분해 */

let arr = ['a', 'b', 'c']
let [first, second] = arr
console.log(first, second) // arr[0], arr[1]