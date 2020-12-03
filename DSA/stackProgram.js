

///------paranthesis

// var str = '[[[{{}]]){)})';   
// var stack = [];
// var count=0;

// for (var i = 0; i < str.length; i++) {
//     if (str[i] == '{' || str[i] == '[' || str[i] == '(') {
//         stack.push(str[i]);
//     }
//     else {
//         if (stack.length > 0) {
//             if (str[i] == '}' && stack[stack.length - 1] == '{' || str[i] == ']'
//                 && stack[stack.length - 1] == '[' || str[i] == ')' && stack[stack.length - 1]=='(') {
//                 stack.pop();

//             }else{
//                 count++;
//             }
//         }
//     }
// }
// console.log(count+stack.length)



// class stack {


//     constructor() {
//         this.stack1 = [];

//     }
//     push(element) {

//         this.stack1.push(element);
//     }
//     pop() {
//         if (this.stack1.length == 0) {
//             return "underflow";
//         } else {
//             return this.stack1.pop();
//         }
//     }
//     peek() {
//         return this.stack1[this.stack1.length - 1];
//     }



// }
// let Obj= new stack();
// console.log(Obj.leetcode());


// var dailyTemperatures = function (T) {
//     T = [73, 74, 75, 71, 69, 72, 76, 73];
//     var arr = T;
//     var stack1 = [];

//     for (var i = 0; i < arr.length; i++) {
//         let top = stack1[stack1.length - 1];
//         while (stack1.length && arr[i] > arr[stack1[stack1.length - 1]]) {
//             arr[stack1[stack1.length - 1]] = i - stack1.pop();
//         }
//         stack1.push(i);
//     }
//     while (stack1.length) {
//         arr[stack1.pop()] = 0;

//     }
//     return arr;


// };
// console.log(dailyTemperatures());




var searchInsert = function (nums, target) {
    nums = [1];
    target = 0;
    var ans = 0;
    var temp = 0;

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] == target) {
            temp = nums[i];
            ans = i;
            break;
        }
        
            if (nums[i] > target) {
                temp = nums[i];
                ans = i;
                break;
            } 
             if (target > nums[nums.length - 1]) {
                temp = nums[i];
                ans = nums.length;
            }
        
    }
    return ans;

};
console.log(searchInsert());
