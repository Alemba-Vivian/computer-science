//Recursion
//it is the idea that a function calls itself
//it is used to solve a big problem by breaking it down into smaller pieces 
//or chunks (divide and conquer).

//write a function pow(x, n) that raises x to a natural power of n. 
//In other words, multiplies x by itself n 

function pow(x, n){

    // using the inbuilt method 
    //  let results = Math.pow(x,n);
    //  return results;


     //using the for loop
    //  let results =1;

    //  for(let i =0; i < n; i++ ){
    //     results *=x;
    //  }
    //  return results;



    // using recursive
    if(n==1){
        return x;
    }else{
        return x * pow(x, n-1);
    }
}

console.log(pow(2,2))  //return 4
console.log(pow(2,3))  //return 8
console.log(pow(2,4))  //return 16


//recursive execution splits into two branches i.e
//if n==1, then everything is less important/value...it is called the base of recursion
//otherwise, we can present pow(x,n)  as x * pow(x, n-1);
//we can also say that pow calls itself until n==1;

//N/B a recursive solution is usually shorter that iterative one

//the maximal number of nested calls(including the first one) is called recursion depth.
//the maximal recursion depth is limited by javascript engine.



//Recursive traversals
//we have a company, the staff structure can be represented as

let company = {
    sales: [{
      name: 'John',
      salary: 1000
    }, {
      name: 'Alice',
      salary: 1600
    }],
  
    development: {
      sites: [{
        name: 'Peter',
        salary: 2000
      }, {
        name: 'Alex',
        salary: 1800
      }],
  
      internals: [{
        name: 'Jack',
        salary: 1300
      }]
    }
  };

  //get the total salaries from the staff

  //function to do the job
  function sumSalaries(department){
    //case 1
     if(Array.isArray(department)){
        return department.reduce((prev, current) => prev + current.salary, 0);
     }else{  //  case 2
        let sum =0;
        for(let subdep of Object.values(department)){
            sum +=sumSalaries(subdep); // recursively call for subdepartments, sum results. 
        }
        return sum;

     }
    
  }
  console.log(sumSalaries(company)); //return 7700;


  
  //Recursive structures
  //a recursive data structure is a structure that replicates itself in parts

  //linked list
  //is recursively defined as an object with value, next



//   Tasks
//sum all the numbers till a given one
// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

function sumTo(n){
    //using recursion
    //case 1
    // if(n==1){
    //     return n;
    // }else //case 2
    // {
    //    return n + sumTo(n-1);
    // }


    // using for loop
    
    let sum=0;
    for(let i=1; i<=n; i++){
        sum +=i;
    }
    return sum;


}

console.log(sumTo(1) ) //return 1
console.log(sumTo(2)) //return 3
console.log(sumTo(3)) //return 6
console.log(sumTo(4)) //return 10
console.log(sumTo(100)) //return 5050

//calculate factorial
//The factorial of a natural number is a number multiplied by "number minus one",
// then by "number minus two", and so on till 1. The factorial of n is denoted as n!

//The task is to write a function factorial(n) that calculates n! using recursive calls.
//P.S. Hint: n! can be written as n * (n-1)!


function factorial(n){
    //working with recursion
    //case 1
    if(n==1){
        return n;
    }else //case 2
    {
        return n * factorial(n-1);
    }
  
}

console.log(factorial(1)) //return  1
console.log(factorial(2)) //return  2
console.log(factorial(3)) //return  6
console.log(factorial(4)) //return  24
console.log(factorial(5)) //return  120








