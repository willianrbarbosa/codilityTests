/*
A string S containing only the letters "A", "B" and "C" is given. The string can be transformed by removing one occurrence of "AA", "BB" or "CC".

Transformation of the string is the process of removing letters from it, based on the rules described above. As long as at least one rule can be applied, the process should be repeated. If more than one rule can be used, any one of them could be chosen.

Write a function:

function solution(S);

that, given a string S consisting of N characters, returns any string that can result from a sequence of transformations as described above.

For example, given string S = "ACCAABBC" the function may return "AC", because one of the possible sequences of transformations is as follows:

ACCAABBC --> AACCBBC --> ACCC --> AC

Also, given string S = "ABCBBCBA" the function may return "", because one possible sequence of transformations is:

ABCBBCBA --> ABCCBA --> ABBA --> AA --> null

Finally, for string S = "BABABA" the function must return "BABABA", because no rules can be applied to string S.

Write an efficient algorithm for the following assumptions:

the length of S is within the range [0..50,000];
string S consists only of the following characters: "A", "B" and/or "C".*/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    if ( (S.includes("AA")) || (S.includes("BB")) || (S.includes("CC")) ) {
        let finalString = S.split("AA").join("").split("BB").join("").split("CC").join("");
        return solution(finalString);
    } else {
        return S;
    }
}

console.log(solution("ACCAABBC"));
console.log(solution("ABCBBCBA"));
console.log(solution("BABABA"));
console.log(solution("ABA"));

let randomString = [];
for (let index = 0; index < 50000; index++) {
  randomString += ((parseInt(Math.random() * (5 - 1) + 1)) > 2 ? "A" : "B");
}
console.time('solution randomString');
console.log(solution(randomString));
console.timeEnd('solution randomString');