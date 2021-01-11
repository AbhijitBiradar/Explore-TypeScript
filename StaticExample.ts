class StaticMem {  
    static num:number; 
    
    static disp():void { 
       console.log("The value of num is"+ StaticMem.num) 
    } 
 } 
 
 StaticMem.num = 12     // initialize the static variable 
 StaticMem.disp()      // invoke the static method

 //use of instanceof operator
 class Person{ } 
 var obj = new Person() 
 var isPerson = obj instanceof Person; 
 console.log(" obj is an instance of Person " + isPerson);

 //Data Hiding
 class Encapsulate { 
    str:string = "hello" 
    private str2:string = "world" 
 }
  
 var obj5 = new Encapsulate() 
 console.log(obj5.str)     //accessible 
 //console.log(obj5.str2)   //compilation Error as str2 is private
