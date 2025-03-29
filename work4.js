//Arthimetic operators 
let a=100;
let b=200;
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(a**b)

//logical operators
let x=true;
let y=false;
console.log(x&&y)
console.log(x||y)
console.log(!x)

//comparsion operators

console.log(a==b)
console.log(a!=b)
console.log(a>b)
console.log(a<b)
console.log(a>=b)
console.log(a<=b)
console.log(a===b)

//string
let name='john'
console.log(firstname)
console.log(lastname)
//string method
console.log(firstname.length);
console.log(firstname.indexof('o'));
console.log(firstname.touppercase());
console.log(firstname.tolowercase());
console.log(firstname.concat(' '));
console.log(firstname.slice(0,4));
console.log(name.charAt(2));
console.log(name.indexof()); 
console.log(name.substring(0,2));

//let name=['john','alex','romeo'];
//console.log(name)
//console.log(name.length)
//console.log(name.[0])
//console.log(name.indexof('romeo'))
//console.log(name.include('romeo'))

//function
    //function in js
    functionname (parameter);{
        blockofcode;

    }
    //call the function name (values);

    function hello(){
        console.log("good morning");

    }
    hello();

    function hello(name){
        console.log("good morning"+" "+name);

    }
    hello("Alex");
