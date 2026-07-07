const user = {
  name: 'John',
  age: 20,
  email: 'john@example.com',
  address: null,
  isValid: true
}

// const name = user.name
// const age = user.age

const { age, name, ...abc } = user
console.log(name, age) // 'John' 20
console.log(abc)
// { email: 'john@example.com', address: null, isValid: true }

const numbers = [10, 1, 8, 20, 99]
const [a, , b, ...xyz] = numbers

console.log(a, b) // 10 1
console.log(xyz) // [8, 20, 99]
console.log(b, ...xyz) // 1 8 20 99

function fn(a, b, ...rest) {
  console.log(a, b) // 1 2
  console.log(rest) // [3, 4, 5]
}

fn(1, 2, 3, 4, 5, 6, 7, 8)
