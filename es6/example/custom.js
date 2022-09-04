const name = 'Ivan'
console.log(toUpperCase`Hello, ${name}!`)

function toUpperCase(litArr, val) {
  console.log(litArr, val) // Array [ "Hello, ", "!" ] Ivan
  return litArr[0] + val.toUpperCase() + litArr[1]
}
