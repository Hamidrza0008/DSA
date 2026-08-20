// 1. Write a Function that searchs for an element in an array and returns its index ,  if the elment is not presnet then just return -1

let arr = [1, 4, 8, 9, 4, 7]
function searchElement(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == x) {
            return i;
        }
    }
    return -1
}
let result = searchElement(arr, 4);
console.log(result);

// 2. WAP that returns the counts of all negetive numbers occured in an array

function countNegative(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count = count + 1;
        }
    }
    return count
}
let result = countNegative(arr);
console.log(result);

// 3. Find The Largest Number in an Array

function findLargest(arr) {
    let max = -1; // This will not work for array containinig NEGATIVE Numbers 
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
let result = findLargest(arr);
console.log(result);

//This another Solution 
function findLargest(arr) {
    let max = -Infinity; // this will work for find all largest number 
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
let result = findLargest(arr);
console.log(result);


function findLargest(arr) {
    let max = arr[0]; // this is the best approach 
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
let result = findLargest(arr);
console.log(result);

// 4. Find the Smallest Number in an Array

function findLargest(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max > arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
let result = findLargest(arr);
console.log(result);

// 5. Find The SecondLargest Number in an Array

function secondLargest(arr) {
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (firstLargest < arr[i]) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        }
        else if (secondLargest < arr[i]) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

let arr = [-3, 4, -1, -10];
let result = secondLargest(arr);
console.log(result);

// But It will Not a Working Solution for Corner Cases Like
// Array is Empty
//Dupplicate Numbers
// So We have to make it More Efficient

function secondLargest(arr) {
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    if (arr.length < 2) {
        return "Invalid Array";
    }

    for (let i = 0; i < arr.length; i++) {
        if (firstLargest < arr[i]) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        }
        else if (secondLargest < arr[i] && arr[i] != firstLargest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

let arr = [1, 4, 5, 2, 4, 7, 8, 8, 0];
// let arr = [1,2]

let result = secondLargest(arr);
console.log(result);

// 6. WAP to make a star pattern of n by n

function makePattern(n) {
    for (let i = 0; i < n; i++) {
        let row = "";

        for (let j = 0; j < n; j++) {
            row += "* ";
        }

        console.log(row);
    }
}

makePattern(4); // it will give one undiefined output at last

n = 4  // you can give any numbers
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
        row = row + "* ";
    }
    console.log(row);
}

// Here is the best Solution
function makePatterns(n) {
    let pattern = "";
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n; j++) {
            row = row + "* ";
        }
        pattern = pattern + row + "\n";
    }

    return pattern
}
console.log(makePatterns(4));


// 7.  WAP to make Patterns Like this

// * 
// * * 
// * * * 
// * * * * 

function makePatterns(n) {
    let pattern = "";

    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < i + 1; j++) {
            row = row + "* ";
        }
        pattern += row + "\n";
    }

    return pattern
}


console.log(makePatterns(4));

// 8. Pattern Like This
// 1 
// 2 2 
// 3 3 3 
// 4 4 4 4 
// 5 5 5 5 5 

function makePatterns(n) {
    let pattern = "";

    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += j + " ";
        }
        pattern += row + "\n";
    }

    return pattern
}


console.log(makePatterns(5));

// 9. Pattern Like This

// 1 
// 2 2 
// 3 3 3 
// 4 4 4 4 
// 5 5 5 5 5 

function makePatterns(n) {
    let pattern = "";

    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += i + " ";
        }
        pattern += row + "\n";
    }

    return pattern
}


console.log(makePatterns(5));

// 10. Pattern Like this
// 1 2 3 4 5 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 

function makePattern(n) {
    let pattern = "";
    for (let i = 0; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= n - i; j++) {
            row += j + " ";
        }
        pattern += row + "\n";
    }
    return pattern;
}

console.log(makePattern(5));

// 11. pattern like this 
// * * * * * 
// * * * * 
// * * * 
// * * 
// *

function makePattern(n) {
    let pattern = "";
    for (let i = 0; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= n - i; j++) {
            row += "*" + " ";
        }
        pattern += row + "\n";
    }
    return pattern;
}

console.log(makePattern(5));

// 12. 
// _ _ _ _ * 
// _ _ _ * * 
// _ _ * * * 
// _ * * * * 
// * * * * * 

function makePattern(n) {
    let pattern = "";
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n - (i + 1); j++) {
            row += "_" + " ";
        }
        for (let k = 0; k < i + 1; k++) {
            row += "* ";
        }

        pattern += row + "\n";
    }
    return pattern;
}

console.log(makePattern(5));

// 13. 
// 1 
// 1 0 
// 1 0 1 
// 1 0 1 0 
// 1 0 1 0 1 

function makePattern(n) {
    let pattern = "";
    for (let i = 0; i < n; i++) {
        let row = "";
        let toggle = 1
        for (let j = 0; j < i + 1; j++) {
            row += toggle + " ";
            if (toggle == 1) {
                toggle = 0;
            }
            else {
                toggle = 1;
            }
        }
        pattern += row + "\n";
    }
    return pattern
}

console.log(makePattern(5));

// 14.
// 1 
// 0 1 
// 0 1 0 
// 1 0 1 0 
// 1 0 1 0 1

function makePattern(n) {
    let pattern = "";
    let toggle = 1
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < i + 1; j++) {
            row += toggle + " ";
            if (toggle == 1) {
                toggle = 0;
            }
            else {
                toggle = 1;
            }
        }
        pattern += row + "\n";
    }
    return pattern
}

console.log(makePattern(5));

// 15. WAP to count the number of digits in an givern number 

function countDigits(num){
    let count = 0;
    while(num>0){
        num = Math.floor(num/10);
        count++;
    }
    return count;
}
console.log(countDigits(192))


// this upper solution is not a complete solutions because of some corner cases 
// like given number is 0 or a negetive number , 
// so here is complete solution 

function countDigits(n){
    
    if(n==0) return 1;
    
    let count = 0;
    n = Math.abs(n);
    while(n>0){
        n = Math.floor(n/10);
        count++;
    }
    return count;
}
console.log(countDigits(-10))

// 16. WAP to Check Given Number is Palendrom Or Not

function isPalendrome(n){
    if(n<0) return false
    let nCopy = n;
    let rev = 0
    while(n>0){
        let rem = n%10;
        rev = (rev*10) + rem;
        n = Math.floor(n/10);
    }
    return rev == nCopy
}

console.log(isPalendrome(12121));

// 17. Reverse an integer

function ReverseInterger(n){
    let ReversedInt = ""
    if(n<0){
        ReversedInt = "-";
    }
    n = Math.abs(n);

    while (n > 0){
        let lastInt = n%10;
        ReversedInt += lastInt + " ";
        n = Math.floor(n/10);
    }
    return ReversedInt;
}

console.log(ReverseInterger(-123))

// Questions Practice

// 18. Array mein sum of all elements find karo

let array = [1,2,3,4,5];  // Output  - 15

const sum = (array) => {
    let result = 0;
    for(let i=0 ; i<array.length ; i++){
        console.log(array[i])
        result += array[i];
    }
    return result;
}
console.log(sum(array));

// 19. Array mein positive, negative aur zero count karo.

let array = [1,2,3] // [3,2,1]

function reverseArray(array){
    let reversed = [];

    for(let i=array.length-1 ; i>=0 ; i--){
        console.log(array[i]);
        reversed.push(array[i]);
    }

    return reversed
}       

console.log(reverseArray(array));

// 20. Array sorted ascending hai ya nahi check karo.

let array1 = [1,2,3,4,5] // true
let array2 = [1,-3,2,4,0] // false

function checkSorted(array){
    for(let i=0 ; i<array.length ; i++){
        if(array[i]>array[i+1]){
            console.log(`${array[i]} ${array[i+1]}`);
            return false 
        }
    }
    return true
}

console.log(checkSorted(array2));

// 21. Second smallest distinct element find karo.

let array = [-1,-3,4,5,7,9,2,4,8]

function secondSmallest(array){
    let firstSmallest = Infinity;
    let secondSmallest = Infinity;

    for(let i=0 ; i<array.length ; i++){
        if(firstSmallest>array[i]){
            secondSmallest=firstSmallest;            firstSmallest=array[i];
            
        }
        else if(secondSmallest>array[i] && array[i] != firstSmallest){
            secondSmallest = array[i];
        }
    }

    return secondSmallest;
}
console.log(secondSmallest(array));

// 22. Sum Of Digit

let num = 123;

function sumOfNum(num) {
    let result = 0;

    while (num > 0) {
        let last = num % 10;
        result += last;
        num = Math.floor(num / 10);
    }

    return result;
}

console.log(sumOfNum(num)); // 6

let num =  -123;

function sumOfNum(num){
    let result = 0;
    num = Math.abs(num)
    num = String(num);

    for(let i=0 ; i<num.length ; i++){
        result = Number(result) + Number(num[i])
    }
    return result
}

console.log(sumOfNum(num));