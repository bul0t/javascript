function foo(a, ...REST) {
  console.log(a, REST)
}

foo(1, 2, 3, 4, 5) // 1, [ 2, 3, 4, 5 ]
