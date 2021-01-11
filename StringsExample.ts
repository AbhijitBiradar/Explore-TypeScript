//String Constructor
var str = new String( "This is string" ); 
console.log("str.constructor is:" + str.constructor);

//Length of String 
var uname = new String("Hello World"); 
console.log(uname) ;
console.log("Length "+uname.length);  // returns the total number of characters 
                                     // including whitespace

//prototype property allows you to add properties and methods to an object.
function employee(id:number,name:string) { 
    this.id = id 
    this.name = name 
 } 

 var emp = new employee(123,"Smith"); 
 employee.prototype.email="smith@abc.com";

 console.log("Employee 's Id: "+emp.id); 
 console.log("Employee's name: "+emp.name); 
 console.log("Employee's Email ID: "+emp.email);           
 
 //String Methods