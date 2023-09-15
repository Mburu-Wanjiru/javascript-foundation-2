 /*
'use strict';
let hasdriverslicence=false;
const passtest=true;

if(passtest) hasdriverslicence=true;
if(hasdriverslicence) console.log(`i can drive`);
*/

//function declaration
/*
function logger() {
    console.log(`my name is wanjiru`);
}
//calling/running/invoking a function
logger();
logger();
logger();
 
function fruitprocessor(apples,oranges){
    
    const juice=`juice with ${apples} apples and ${oranges} oranges.`;
    console.log(`there are ${apples} apples and ${oranges} oranges in this juice`);
    return juice;
}

//output the function
console.log(fruitprocessor(3,4));

// invoking a function in another variable
const  applejuice=fruitprocessor(5, 0);//5,0 are called arguements
console.log(applejuice);

const appleorangejuice=fruitprocessor(34,87);
console.log(appleorangejuice);

*/


/*
//function declaration
//you can call this type before you define it unlike expression function.
const age1=calcage1(1991);
function calcage1(birthyear){
    return 2037-birthyear;
}

 
 console.log(age1);

 //function expression
  const calcage2= function (birthyear){
    return 2037-birthyear;
 }

 const age2=calcage2(1991);
 console.log(age1,age2);
*/


//expression function
//const calage4=function(birthyear){
 //   return (2037-birthyear);}


//const age3=calage4(1991);
//console.log(age3);

/*
//arrow function//faster and shorter to write
 const calage4=birthyear=>2037-birthyear;
  age4=calage4(1991);
  console.log(age4);

//calculate how many years till retirement

const yearsuntilretirement=birthyear => {
    const age5=2037-birthyear;
    const retirement=65-age5;
    return retirement;
}
console.log(yearsuntilretirement(1991));

const yearsuntilretirement1=(birthyear,firstname) => {
    const age6=2037-birthyear;
    const retirement1=65-age6;
    return `${firstname} retires in ${retirement1} years to come`;
}
console.log(yearsuntilretirement1(1991,`jimna`));
console.log(yearsuntilretirement1(1980,`gashiru`));
*/

//HOW TO INVOKE A FUMCTION INSIDE A FUNCTION

//FUCTION FOR CUTTING FRUITS INTO PIECES

function cutfruitspieces(fruit){
    return fruit*4;
}

function fruitprocessor(apples,oranges){
   const applepieces= cutfruitspieces(apples);
   const orangepieces=cutfruitspieces(oranges);
    
    const juice=`juice with ${applepieces} pieces of apples and ${orangepieces} pieces of oranges .`;
   
    return juice;
}

console.log(fruitprocessor(2,3));



















