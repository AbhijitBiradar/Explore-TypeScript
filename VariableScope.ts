var global_num=3; // This is Global variable
class Numbers{
    class_val=101;
    static num_val=5;  // This is static variable
    storeNumber():void{
        var local_num=7; // this is local variable
        console.log("Local Variable :"+ local_num);
    }
}

console.log("Variable Scope: ");

console.log("Global Variable : " + global_num);
console.log("Static Variable : " + Numbers.num_val);

var obj=new Numbers();
console.log("Class Variable :" + obj.class_val);
obj.storeNumber();