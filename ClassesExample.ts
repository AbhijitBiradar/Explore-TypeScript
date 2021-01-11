// Declaring a class
class Car { 
    //field 
    engine:string; 
  
    //constructor 
    constructor(engine:string) { 
       this.engine = engine 
    }  
 
    //function 
    disp():void { 
       console.log("Engine is  :   "+this.engine) 
    } 
 }

 //create an object 
var obj = new Car("XXSY1")

//access the field 
console.log("Reading attribute value Engine as :  "+obj.engine)  

//access the function
obj.disp()

//Class Inheritance

class Shape { 
    Area:number 
    
    constructor(a:number) { 
       this.Area = a 
    } 
 } 
 
 class Circle extends Shape { 
    disp():void { 
       console.log("Area of the circle:  "+this.Area) 
    } 
 }
   
 var obj1 = new Circle(223); 
 obj.disp()


//Multi Level Inheritance
class Root { 
    str:string; 
 } 
 
 class Child extends Root {} 
 class Leaf extends Child {} //indirectly inherits from Root by virtue of inheritance  
 
 var obj3 = new Leaf(); 
 obj3.str ="hello" 
 console.log(obj3.str) 


//Class inheritance and Method Overriding
class PrinterClass { 
    doPrint():void {
       console.log("doPrint() from Parent called…") 
    } 
 } 
 
 class StringPrinter extends PrinterClass { 
    doPrint():void { 
       super.doPrint() 
       console.log("doPrint() is printing a string…")
    } 
 } 
 
 var obj4 = new StringPrinter() 
 obj4.doPrint() 













