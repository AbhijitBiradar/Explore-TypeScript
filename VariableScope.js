var global_num = 3; // This is Global variable
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.class_val = 101;
    }
    Numbers.prototype.storeNumber = function () {
        var local_num = 7; // this is local variable
        console.log("Local Variable :" + local_num);
    };
    Numbers.num_val = 5; // This is static variable
    return Numbers;
}());
console.log("Variable Scope: ");
console.log("Global Variable : " + global_num);
console.log("Static Variable : " + Numbers.num_val);
var obj = new Numbers();
console.log("Class Variable :" + obj.class_val);
obj.storeNumber();
