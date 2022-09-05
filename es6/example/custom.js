const name = 'Ivan'
const sex  = 'male'
const age  = 23

let user = {
  name,
  sex,
  age,
  greet() {
    console.log(`Hello ${this.name}`)
  },
  get password() {
    return this.name + this.age;
  }
}

console.log(user.password) // Ivan23