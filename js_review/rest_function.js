/* 함수 매개변수에 rest 연산자 */

function total(num, ...arr) {
    let result = num;
    // 합계 계산
    // 1. for
    // for(let i = 0; i < arr.length; i++) {
    //     result += arr[i];
    // }
    
    // 2. for of : 배열 요소
    // for(n of arr) {
    //     result += n;
    // }

    // 3. for in : 배열 인덱스
    // for(idx in arr) {
    //     result += arr[idx];
    // }

    // 4. reduce
    result = arr.reduce(
        (acc, ele) => acc + ele, // (결과인수, 배열요소) => 실행
        num                      // 초기값
    )
    console.log(num, arr);
    console.log(result);
}

total(10);
total(10, 20);
total(10, 20, 30);