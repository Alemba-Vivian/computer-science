//sum all numbers till the given one
// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n

// Make 3 solution variants:

// Using a for loop.
   function sumTo1(n){
    let sum =0;
    for(let i =0; i<=n; i++){
        sum +=i;
    }
    return sum;
   }
//    console.log(sumTo1(10000));
   


// Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
function sumTo(n){
    if(n==1){
        return n;
    }else{
        return n + sumTo(n-1);
    }
}
// console.log(sumTo(10000));


// Using the arithmetic progression formula.
function sumTo3(n){
    return n *(n + 1)/2;

}
// console.log(sumTo3(10000));


//CALCULATE FACTORIAL
//The factorial of a natural number is a number multiplied by "number minus one",
//then by "number minus two", and so on till 1. The factorial of n is denoted as n!

// The task is to write a function factorial(n) that calculates n! using recursive calls.
function factorial(n){
    if(n==1){
        return n;
    }else{
        return n * factorial(n - 1);
    }
}
// console.log(factorial(6));



// FIBONACCI NUMBERS

// The sequence of Fibonacci numbers has the formula Fn = Fn-1 + Fn-2. 
//  In other words, the next number is a sum of the two preceding ones.

// First two numbers are 1, then 2(1+1), then 3(1+2), 5(2+3) and so on:
//  1, 1, 2, 3, 5, 8, 13, 21....

// Fibonacci numbers are related to the Golden ratio and many natural phenomena around us.


// Write a function fib(n) that returns the n-th Fibonacci number.
function fib(n){
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
// console.log(fib(77));

// since the recursive method to calculate fibonacce takes alot of 
//we going to work with for loops

function fib1(n){
    let a =1;
    let b =1;

    for(let i =3; i<=n; i++){
        let c = a + b;
        a =b;
        b=c;
    }
    return b;
}
// console.log(fib1(3));



//OUTPUT A SINGLE LINKED LIST
// Let’s say we have a single-linked list

let list3 = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

//Write a function printList(list) that outputs list items one-by-one.
// function printList(list){
//      list = [list3];
//      list.forEach(element => {
//         alert(element.value)
//      })
//     }
// printList(list3);


// using a for loop
// function printList(list) {
//     let tmp = list;
  
//     while (tmp) {
//       alert(tmp.value);
//       tmp = tmp.next;
//     }
  
//   }
  
//   printList(list3);

// using recursive method
// function printList(list){
//     alert(list.value);

//     if(list.value){
//         printList(list.next);
//     }
// }
// // printList(list3);

// reversing the list using recursion

// function reversePrintList(list){
//     if(list.next){
//         reversePrintList(list.next);
//     }
//     alert(list.value);
// }
// reversePrintList(list3);
