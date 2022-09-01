var user = {
  data: [
    {name: 'Иван'},
    {name: 'Петр'},
    {name: 'Сидор'},
  ],
  showFirst: function(event) {
    console.log(this.data[0].name)
  }
}

document.getElementById('btn').addEventListener('click', user.showFirst.bind(user)) // Иван
