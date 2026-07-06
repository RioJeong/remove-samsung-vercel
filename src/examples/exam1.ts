let a = ''
let b = 0
const c = []

c.push(1, 2)
a = 'ABC'
b = 123
console.log(a, b)

// 타입 추론
// 추론O: 원시형(문자, 숫자, 불린, null, undefined, Symbol, BigInt)
// 추론X: 참조형(배열, 객체, 함수)
