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


