function Person(properties) {
  for (var i in properties) {
    var getProperty = i[0].toUpperCase() + i.slice(1);
    this["get" + getProperty] = function() {
      return properties[i];
    }
  };

  for (var i in properties) {
    var setProperty = i[0].toUpperCase() + i.slice(1);
    this["set" + setProperty] = function(data) {
      properties[i] = data;
    }
  }
}

bob = new Person({name: "Bob", age: "20"})
