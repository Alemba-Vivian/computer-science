// Question 1: Sum all 

//Write a function called sumRange. 
//It will take a number and return the sum of all numbers from 1 up to the number passed in.
//Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6.

function sumRange(n){
     //case 1
     if(n==1){
        return n;
     }else //case 2
     {
        return n + sumRange(n-1);
     }
}
console.log(sumRange(3)); //return 6
console.log(sumRange(4)); //return 10
console.log(sumRange(5)); //return 15


//Question 2: Power function
//Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.

function power(base,expo){
    //case 1
    if(expo==0){
        return 1;
    }else //case 2
    {
        return base * power(base, expo-1);
    }
}


console.log(power(2, 4)); //return 16
console.log(power(2, 3)); //return 8
console.log(power(2, 2)); //return 4 
console.log(power(2, 1)); //return 2
console.log(power(2, 0)); //return 1


// Question 3: Calculate factorial

// Write a function that returns the factorial of a number.
// As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it, 
//and the number before that number, and so on, until you reach 1.
// The factorial of 1 is just 1.

//Sample:   //factorial(5); // 5 * 4 * 3 * 2 * 1 === 120

function factorial(num){
    //case 1
    if(num==1){
        return 1;
    }else //case 2
    {
        return num * factorial(num -1);
    }
}
console.log(factorial(5)); //return 120


//Question 4: Check all values in an array

//Write a function called all which accepts an array and a callback 
//and returns true if every value in the array returns true when
// passed as parameter to the callback function



let allAreLessThanSeven =all([1,2,9], function(num){
    return num < 7;
})
console.log(allAreLessThanSeven);  //return false



function all(array, callback){
    var copy = copy || array.slice(); // shallow copies array

	if(copy.length === 0) return true;

	if(callback(copy[0])){
		copy.shift(); // remove first element from array
		return all(copy, callback);
	} else {
		return false;
	}

}

// Question 5: Product of an array
//Write a function called productOfArray which takes in an array of numbers and returns the product of them all

//using reduce method
// const productOfArray=(array)=>array.reduce((a,b)=>a*b, 1);
// console.log(productOfArray([1,2,3])) //return 6
// console.log(productOfArray([4,2,8])) //return 64

//using recursion method
function productOfArray(array){
    //case 1
    if(array.length ===0){
        return 1;
    }else{  //case 2
        return array.shift() * productOfArray(array);

    }
}
console.log(productOfArray([4,2,8]));  //return 64


//Question 6: Search JS object

//Write a function called contains that searches for a value in a nested object.
//It returns true if the object contains that value.

let nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}


function contains(obj, value){
    //case 1
    for(let key in obj){
        if(typeof obj[key] === 'object'){
            return contains(obj[key], value);
        }
        if(obj[key]===value){
            return true;
        }
        return false;
    }
    
    

}
console.log(contains(nestedObject, 44)) // return true
console.log(contains(nestedObject, 48)) // return false



//Question 7: Parse a multi-dimensional array
//Given a multi-dimensional integer array, 
//return the total number of integers stored inside this array


var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7
console.log(seven);

function totalIntegers(array){
	if(array.length === 0) return 0;

	let total = 0;
	let first = array.shift();

	if (Array.isArray(first)){
		total += totalIntegers(first); 
	} else if (Number.isInteger(first)) {
		total += 1;
	}

	return total + totalIntegers(array);
}


//Question 8:
//Write a function that sums squares of numbers in list that may contain more lists
var l = [1,2,3]; 
console.log(SumSquares(l)); // 14

l = [[1,2],3]; 
console.log(SumSquares(l)); // 14

l = [[[[[[[[[1]]]]]]]]] 
console.log(SumSquares(l)); // 1

l = [10,[[10],10],[10]] 
console.log(SumSquares(l)); // 400

function SumSquares(array){
	if(array.length === 0) return 0;
	let total = 0;

	for(let i = 0; i < array.length; i++){
		if(Array.isArray(array[i])){
			total += SumSquares(array[i]);
		} else {
			total += array[i] * array[i];
		}
		
	}
	return total;
}


//Question 9:

//The function should return an array containing repetitions of the number argument.
//For instance, replicate(3, 5) should return [5,5,5].
//If the times argument is negative, return an empty array.

function replicate(times, num){
    let array =[];
    if(times ===1){
         array.push(num);
        return array;
    }
    if(times < 0){
        return array;
    }
    else{

        return [num].concat(replicate(times-1, num));
    }
}
console.log(replicate(1,69)); //return [69]
console.log(replicate(-2,6)); //return []
console.log(replicate(3, 5)) // return [5, 5, 5]




