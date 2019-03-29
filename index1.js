// let firstName='Ameer', lastName='Pathan';
// let age=22;
// console.log(firstName);
// console.log(age);

// let person={
//     firstName:'Ameer',
//     age:22
// };
// //dot notation
// person.firstName='Aman';

// //bracket notation
// person['firstName']='Ameer';

// console.log(person.firstName);

//arrays
// let selectedColors=['red','blue'];
// selectedColors[2]='green';
// selectedColors[3]=1;
// console.log(selectedColors.length);
// selectedColors[4]='pink';
// console.log(selectedColors.length);
// console.log(selectedColors);

//functions
// function greet(name,lastN){
//     console.log('hello '+name,'' +lastN);
// }

// function square(number){
//     return number*number;
// }
// greet('john','smith');
// greet('ameer','pathan');

// console.log(square(2111));

// let baseSalary=30000;
// let overTime=10;
// let rate=20;

// function getWage(baseSalary,overTime,rate){
//     return baseSalary+(overTime*rate);
// }

// let employee={
//     baseSalary:30000,
//     overTime:10,
//     rate:20,
//     getWage:function(){
//         return this.baseSalary+(this.overTime*this.rate);
//     }
// };

// let a=employee.getWage();
// console.log(a);

// let circle={
//     radius:1,
//     location:{
//         x:1,
//         y:1
//     },
//     draw:function(){
//         console.log('draw');
//     }   
// };

// circle.draw();


// //factory fuction
// function createCircle(radius){
//    return{
//         radius,
//         draw:function(){
//             console.log('draw');
//         }
//     };
// }


// const circle=createCircle(1);
// console.log(circle);


// //constructor function
// function Circle(radius){
//     console.log('this',this);
//     this.radius=radius;
//     this.draw=function(){
//         console.log('draw');
//     }
// }

// const another= new Circle(1);

// let x={value:10};
// let y=x;

// x.value=20;

// console.log(x);
// console.log(y);

// //value type/primitive type
// let number=10;
// function increase(number){
//     number++;
// }

// increase(number);
// console.log(number);


// //reference type/object type
// let obj={value:10};
// function increase(obj){
//     obj.value++;
// }

// increase(obj);
// console.log(obj);

// function Circle(radius){
//     this.radius=radius;
//     this.draw=function(){
//         console.log('draw');
//     }
// }
// const circle=new Circle(10);
// circle.location={x:1};

// for(let key in circle){
//     if(typeof circle[key] !=='function'){
//         console.log(key,circle[key]);    
//     }
//     console.log(key,circle[key]);
// }

// const keys=Object.keys(circle);
// console.log(keys);

function Circle(radius){
    console.log('this',this);
    this.radius=radius;
    this.draw=function(){
        console.log('draw');
    };
}
const circle=new Circle(10);

