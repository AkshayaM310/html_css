let arr=[2,4,6,8,10];
for (let i=0; i<arr.length; i++)
{
    console.log(arr[i]);
}

// .length --> gives the no of elements in the array 

/*push pop unshift shift--> displays the current size of array */
//push- all element to the LAST
arr.push(12);
console.log(arr);

//pop- del element from LAST
arr.pop()
console.log(arr);

//unshift- all element to the FRONT 
arr.unshift(0);
console.log(arr);

//shift- del element from the FRONT
arr.shift();
console.log(arr);

//example for forEach()
let m=["apple","banana","orange","mango","grapes","kiwi"];
m.forEach(fruits=>{
    console.log(fruits);
})

//example for map()
let n=["apple","banana","orange","mango","grapes","kiwi"];
let o=n.map(fruits=>
    fruits.toUpperCase());
    console.log(o);

//example for filter()
let p=["apple","banana","orange","mango","grapes","kiwi"];
let q=p.filter(fruits=>
    fruits.length>5);
    console.log(q);

//example for find()
let r=["apple","banana","orange","mango","grapes","kiwi"];
let s=r.find(fruits=>
    fruits.length>5);
    console.log(s);

