function greet(gender, age, name) {
  var salutation = gender === 'male' ? 'Mr. ' : 'Ms. '
  if(age > 25) {
    return 'Hello, ' + salutation + name + '.'
  } else {
    return 'Hey, ' + name + '.'
  }
}

var greetAnAdultMale = greet.bind(null, 'male', 45)
console.log(greetAnAdultMale('Иван'))
var greetAYaoungdter = greet.bind(null, 'male', 15)
console.log(greetAYaoungdter('Петя'))
