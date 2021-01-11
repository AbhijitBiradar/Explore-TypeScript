//initialize Tuples
var mytuple2 = [];
mytuple2[0] = 120;
mytuple2[1] = 234;
//Accessing values in Tuples
var mytuple1 = [10, "Hello"]; //create a  tuple 
console.log(mytuple1[0]);
console.log(mytuple1[1]);
//Tuple Operations
var mytuple = [10, "Hello", "World", "typeScript"];
console.log("Items before push " + mytuple.length); // returns the tuple size 
mytuple.push(12); // append value to the tuple 
console.log("Items after push " + mytuple.length);
console.log("Items before pop " + mytuple.length);
console.log(mytuple.pop() + " popped from the tuple"); // removes and returns the last item
console.log("Items after pop " + mytuple.length);
//Updating Tuples
var mytuple4 = [10, "Hello", "World", "typeScript"]; //create a  tuple 
console.log("Tuple value at index 0 " + mytuple4[0]);
mytuple4[0] = 121;
console.log("Tuple value at index 0 changed to   " + mytuple4[0]);
//Destructuring a Tuple
var a = [10, "hello"];
var b = a[0], c = a[1];
console.log(b);
console.log(c);
