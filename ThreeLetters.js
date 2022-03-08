/*
Write a function solution that, given two integers A and B, returns a string containing exactly A letters 'a' and exactly B letters 'b' with no three consecutive letters being the same (in other words, neither "aaa" nor "bbb" may occur in the returned string).

Examples:

1. Given A = 5 and B = 3, your function may return "aabaabab". Note that "abaabbaa" would also be a correct answer. Your function may return any correct answer.

2. Given A = 3 and B = 3, your function should return "ababab", "aababb", "abaabb" or any of several other strings.

3. Given A = 1 and B = 4, your function should return "bbabb", which is the only correct answer in this case.

Assume that:

A and B are integers within the range [0..100];
at least one solution exists for the given A and B.
In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.*/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    let countSt = 0, countNd = 0;
    let string = "", stConcatStr = "", ndConcatStr = "";
    if ( A >= B ) {
        stNumber = A;
        ndNumber = B;
        stConcatStr = "a";
        ndConcatStr = "b";
    } else {
        stNumber = B;
        ndNumber = A;
        stConcatStr = "b";
        ndConcatStr = "a";
    }
    for (let i = countSt; i < stNumber; i++) {
        string += stConcatStr;
        countSt ++;
        if ( (ndNumber / stNumber) > 2 ) {
            break;
        } else {
            if ( (countSt % 2) == 0 )   break;
        }
    }
    for (let i = countNd; i < ndNumber; i++) {
        string += ndConcatStr;
        countNd ++;
        if ( (stNumber / ndNumber) > 2 ) {
            break;
        } else {
            if ( (countNd % 2) == 0 )   break;
        }
    }
    if ( (countSt < stNumber) || (countNd < ndNumber) ) {
        if ( A >= B ) {
            string += solution((stNumber - countSt), (ndNumber - countNd));
        } else {
            string += solution((ndNumber - countNd), (stNumber - countSt));
        }
        return string;
    } else {
        return string;
    }
}

console.log(solution(5,3));
console.log(solution(3,3));
console.log(solution(10,7));
console.log(solution(1,4));
console.log(solution(8,4));
console.log(solution(4,8));
console.log(solution(2,6));
