//Array Initialization
var alphas;
alphas = ["1", "2", "3", "4"];
console.log(alphas[0]);
console.log(alphas[1]);
//Array Object
var arr_names = new Array(4);
for (var i = 0; i < arr_names.length; i++) {
    arr_names[i] = i * 2;
    console.log(arr_names[i]);
}
//Array Constructor accepts comma separated values
var names = new Array("Mary", "Tom", "Jack", "Jill");
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//Array Destructuring
var arr = [12, 13];
var x = arr[0], y = arr[1];
console.log(x);
console.log(y);
//Array Traversal using for…in loop
var j;
var nums = [1001, 1002, 1003, 1004];
for (j in nums) {
    console.log(nums[j]);
}
//Multidimension Array
var multi = [[1, 2, 3], [23, 24, 25]];
console.log(multi[0][0]);
console.log(multi[0][1]);
console.log(multi[0][2]);
console.log(multi[1][0]);
console.log(multi[1][1]);
console.log(multi[1][2]);
//Passing Array to a Function
var names = new Array("Mary", "Tom", "Jack", "Jill");
function disp(arr_names) {
    for (var i = 0; i < arr_names.length; i++) {
        console.log(names[i]);
    }
}
disp(names);
//Function Returning Array
function disp1() {
    return new Array("Mary", "Tom", "Jack", "Jill");
}
var nums1 = disp1();
for (var i1 in nums1) {
    console.log(nums1[i1]);
}
