// using the pow method
// console.log(Math.pow(2,2));
// console.log(Math.pow(2,3));
// console.log(Math.pow(2,4));


// using the iterative way(use of for loops)
// function pow(n, y){
//     let value =1;

//     for(let i=0; i<y; i++){

//        value *=n;

//     }
//     return value;
// }
// console.log(pow(2,3));




//using recursion
// function pow2(x, n){
//     if(n==1){
//         return x;
//     }else{
//         return x * pow2(x, n-1);
//     }
// }
// console.log(pow2(2,2));


//RECURSIVE TRAVERSALS
// GET THE SUM OF ALL THE SALARIES FOR THE EMPLOYEES

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


//the function to do the job
function sumSalaries(deparment){
    //case 1
    if(Array.isArray(deparment)){
        return deparment.reduce((prev, current)=>prev + current.salary,0);
    }
    //case 2
    else{
        let sum = 0;
        for(let subdep of Object.values(deparment)){
            sum +=sumSalaries(subdep);
        }
        return sum;
    }
}
console.log(sumSalaries(company));


//LINKED LIST

// Imagine, we want to store an ordered list of objects.
let list =[obj1={"name": "vivian"}, obj2={"name": "joy"}, obj3={"name": "mervin"}];
list.push(obj4={"name": "Ronnix"});
console.log(list);

//when working with a complex project or a large number of items, delete and insert(unshift/shift)
//will be expensive to use, since it will need to transform each items in the array
//the best way to deal with this is by using a linked list.

let linkedList ={
    value:1,
    next:{
        value: 2,
        next:{
            value: 3,
            next:{
                value: 4,
                next:null
            }
        }
    }
}
let list2 ={value:1};
list2.next ={value:2};
list2.next.next ={value:3};
list2.next.next.next ={value:4};

list2 ={value:"new item", next:list2};
list2.next = list2.next.next;

console.log(list2);
