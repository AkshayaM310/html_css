
function greet()
{
    console.log("hellooooo");
}
greet();

let greet2=function(){
    console.log("haii");
}
greet2();

let greet3= ()=> {
    console.log("hii");
}
greet3();


//1
function add1(a,b)
{
    return a+b;
}
let sum1=add1(1,2);
console.log(sum1);

//2
let add2=function(a,b)
{
    return a+b;
}
let sum2=add2(2,3);
console.log(sum2);

//3
let add3=(a,b) =>{
    return a+b;
}
let sum3=add3(6,3);
console.log(sum3);

//short3
let add31=(a,b) => a+b;
console.log(add31(8,4));
