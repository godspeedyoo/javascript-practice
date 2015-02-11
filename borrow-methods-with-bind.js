var person = {
  data: { name: "Bob", age: 27 }
}

var other = {
  data: { name: "Registry", number: 235234 },
  showData: function() {
    console.log(this.data);
  }
}


person.showData = other.showData.bind(person)
