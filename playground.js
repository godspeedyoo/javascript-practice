// // Create a student object with dynamic accessor methods

// function Student( properties ){
//   var $this = this; // store class scoped 'this'

//   for ( i in properties ){
//     (function(i){
//       $this[ "get" + i ] = function(){
//         return properties[i];
//       }
//     })(i)
//     // console.log(i + ": " + properties[i]);
//     // console.log(
//       // $this["name"] - this does not work

//       // properties[i]
//     //   $this.properties["name"] = function(){
//     //   return properties["name"]
//     // }
//     // );
//   }
// }
function Student(properties){
  this.Name = properties["Name"]
}
var student = new Student(
  {
    Name: "Joseph",
    Age: "27",
    Gender: "male"
  });


// console.log(student.getName());

// Student(i)
console.log(student.Name);
