//Simple Function
function test() {
    console.log("function called");
}
test(); // function invocation
//Returning Function Example
//function defined 
function greet() {
    return "Hello World";
}
function caller() {
    var msg = greet(); //function greet() invoked 
    console.log(msg);
}
//invoke function 
caller();
//Parameterized Function
function test_param(n1, s1) {
    console.log(n1);
    console.log(s1);
}
test_param(123, "this is a string");
