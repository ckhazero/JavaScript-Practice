/* Q1:
Write the function printInt(n) taking one parameter n and print all natural numbers from 1 to n in console.
*/

function printIt (n){
    for (var x = 1 ; x <= n ; x++){
        console.log (x);
    }
}
printIt (n);

/* Q2:
Write the function printIntRev(n) taking one parameter n and  print all natural numbers in reverse in console (from n to 1).
*/

function printIt (n){
    for (var x = n ; x >= 1 ; x--){
        console.log (x);
    }
}
printIt (n);

/*Q3:
Write the function checkInput(x) taking one parameter x and return the string ‘number’ if x is a number;
return the string ‘string’ if x is a string; and return boolean if x is a boolean. Otherwise returns -1.
*/

function checkInput (x) {
    if (typeof x === "number"){
        return "number"}
    else if (typeof x === "string"){
        return "string"}
    else if (typeof(x) === "boolean"){
        return "boolean"}
    else {
        return -1;
    }
}

/*Q4:
Write the function simpleEvenAdding(num) taking a number and add up all the even numbers from 1 to num.
*/

function simpleEvenAdding (num) {
    var sum = 0;
for (var i = 1; i <= num; i++) {
	if (i % 2 === 0) {
		sum += i;
	}
}
 
console.log(sum);
}
simpleEvenAdding (5);

/*Q5:
Write the function letterCapitalize(str) taking a string and capitalize the first letter of each word.
The given words will be separated by only one space.
*/

function letterCapitalize(str){
    var fill = [];
    var toSubArr = str.split (" ");
    for (var x = 0 ; x < toSubArr.length ; x++){
        fill.push(toSubArr[x][0].toUpperCase() + toSubArr[x].slice (1));
    }
    return fill.join (" ");
}
console.log (letterCapitalize (str));

/*Q6
Write the function simpleReverse(str) taking a string and return the string in reversed order.
*/

function simpleReverse(str){
    var toRev = "";
    for (var x = str.length - 1 ; x >=0 ; x--){
        toRev += str[x];
    }
    return toRev;
}
console.log (simpleReverse(str));

/*Q7:
Write the function findDiff(arr) taking an array of numbers as parameter and return the difference
between the maximum number and the minimum number (max - min).
*/

function findDiff (arr){
    for (x = 1 ; x <= arr.length ; x++){
    return Math.max(...arr) - Math.min(...arr);
    }
}
console.log (findDiff([arr]));

/*Q8:
Write the function timeConvert(num) taking a number as parameter and return the number of hours and minutes the
parameter converts to. Separate the number of hours and minutes with a colon.
*/

function timeConvert (num){
    if (num <= 60){
        console.log (num);
    }
    else {
        var x = Math.floor (num/60);
        var y = num % 60;
        console.log (x + ":" + y);
    }
}
timeConvert(num);

/*Q9
Write the function findStr(str, long) taking two strings as parameters and return how many str you can find in long.
Assume Str is not empty string.
*/

  function findStr(str, long){
    return long.split(str).length - 1;
}

console.log (findStr ("hi", "dasdhidasdahidashi"));

/*Q10
Write the function selfDividingNumbers(left, right) taking two number bound as parameters and returns an array of
every possible self dividing number between them, including the bounds.
}*/

function selfDividingNumbers(left, right){
    var toDiv = [];
    var result;
    
    for (left; left <= right ; left++){
        for  (var x = 0 ; x < left.toString().length ; x++){
            if (left % left.toString().charAt(x) === 0){
                result = true;
            }
            else {
                result = false;
                break;
            }

        }
        if (result === true)
            toDiv.push(left);
    }
    return toDiv;
}
console.log (selfDividingNumbers(12, 21));

/*Q11
Write the function moveZeros(nums) taking an array of numbers and move all 0’s to the end of it while
maintaining the relative order of the non-zero elements.     
*/

function moveZeros (nums){
    var count = 0;
    for (var x = 0 ; x < nums.length ; x++){
        if (nums[x] !== 0) nums[count++] = nums[x];
    } while (count < nums.length) nums[count++] = 0;
    return nums;
}
console.log(moveZeros([0, 1, 2, 0, 3, 0, 5, 6]));

/*Q12
Create an average() function that calculates the average of an array of numbers.
*/
function average(arr) {
    var sum = 0;
    for (var x = 0 ; x < arr.length ; x++){
        sum += arr[x];
    }
    return sum / arr.length;
}
console.log (average([2, 3, 3, 5, 7, 10]));