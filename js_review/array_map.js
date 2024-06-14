/* map */

let arr = [1, 2, 3]
let result = arr.map(num => num * num);
console.log(result);

let userArr = [
    {userId: 1, score: 60},
    {userId: 2, score: 50},
    {userId: 3, score: 70},
    {userId: 4, score: 40}
];

let newArr = userArr.map(user => {
    if(user.score >= 60) return {...user, grade: true};
    else return {...user, grade: false};
});
console.log(userArr);
console.log(newArr);