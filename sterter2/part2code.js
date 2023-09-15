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

//arrow function//faster and shorter to write

// const calage4=birthyear=>2037-birthyear;
// age4=calage4(1991);
// console.log(age4);

//calculate how many years till retirement
/*
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

/*
function cutfruitspieces(fruit){
    return fruit*10;
}

function fruitprocessor(apples,oranges){
   const applepieces= cutfruitspieces(apples);
   const orangepieces=cutfruitspieces(oranges);
    
    const juice=`juice with ${applepieces} pieces of apple and ${orangepieces} pieces of orange.`;
   
    return juice;
}

console.log(fruitprocessor(67,87));
*/

//reviwing
/*
const calcage4=function(birthyear){
    return 2048-birthyear;
}
const yearstilretirement=function (birthyear,firstname) {
    const age6=calcage4-(birthyear);
    const retirement2=65-age6;
   


if(retirement2>0){
    return retirement2;
    console.log( `${firstname} retires with ${retirement} years`);
}

else{
    return -1;
    console.log(`${firstname} has retired`);
}
    //return `${firstname} retires with ${retirement} years`;
}

console.log(yearstilretirement(1991,`jimna`)); 
console.log(yearstilretirement(1970,`mike`));
*/

//                       challenge 1

/* 

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉

*/
/*
function calc7Average (va1,va2,va3,v1,v2,v3){
    const koalascore= va1+va2+va3;
    const dolphinscore=v1+v2+v3;
const averagekoala=koalascore/3;
const averagedolphin=dolphinscore/3;
return `koalascore is ${averagekoala} and dolphinscore is ${averagedolphin}`;
}
const va1=65,va2=54,va3=49,v1=44,v2=23,v3=71 ;
const  calcAverage=function calc7Average(va1, va2,va3,v1,v2,v3);

console.log(calcAverage);
console.log(`koalascore is ${averagekoala} and dolphinscore is ${averagedolphin}`);

*/

//Create an arrow function 'calcAverage' to calculate the average of 3 scores
/*
const calcAverage=(a,b,c)=> (a+b+c)/3;


      //Use the function to calculate the average for both team

      const dolphinscore= (44, 23, 71);
      const koalascore=(65, 54, 49);
const averagedolphin=calcAverage(44, 23, 71);
const averagekoala=calcAverage(65, 54, 49);
console.log(averagedolphin,averagekoala);


      /*Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!*/
/*
const checkwinner=(averagedolphin,averagekoala)=>{
    

if(averagedolphin>=2*averagekoala){

    console.log(`dolphin wins (${averagedolphin} vs ${averagekoala})`);

}  
 else if(averagekoala>=2*averagedolphin) {
    console.log(`koala wins (${averagekoala} vs ${averagedolphin})`);
}else{
    console.log(`no one wins`);
}

}




checkwinner(averagedolphin,averagekoala);

checkwinner(876,412);
*/
//data structures:arrays and objects
//arraays
/*
    const friend1=`michael`
    const friend2=`stephen`
    const friend3=`peter`
    
    const friends=[`michael`,5678,`peter`];
    console.log(friends);
    
const years=new Array(62,67,87,89);

console.log(years);

console.log(friends[0]);

console.log(years[0]);

console.log(friends.length);
console.log(years [years.length-1]);
console.log(years [years.length-3]);

friends[2]=`jay`;
console.log(friends);
const firstname=`jonas`
const jonnas=[`firstname`,`jimna`,678-569,`teacher`,friends];

console.log(jonnas);

     //exercise
const calcage4=function(birthyear){
    return 2048-birthyear;

}
const year=[1987,1967,1998,2002,2018];

const age1=calcage4(year[0]);
const age2=calcage4(year[3]);
const age3=calcage4(year[year.length-1]);
console.log(age1,age2,age3);

const ages=[calcage4(year[0]),calcage4(year[3]),calcage4(year[year.length-1])]

console.log(ages);



///methods in array
  //push method //adds elements to the end of array
const friends=[`michael`,5678,`peter`];
friends.push(`jay`);
const newlength=friends.push(`kamau`);

console.log(friends);
console.log(newlength);

// adds element at beginning of array

friends.unshift(`john`);
const length=friends.push(`crystal`);//adds at the end
//
console.log(friends);

//remove the last element of array
//pop function
friends.pop();
friends.pop();
const popped=friends.pop();
console.log(friends);
console.log(popped);

//removing the first element in array
//using shift

friends.shift();
friends.shift();
console.log(friends);

//checking position of an element in array

console.log(friends.indexOf(5678));

//checking if an element is in an array

console.log(friends.includes(`5678`));
console.log(friends.includes(5678));

if (friends.includes(`peter`)){
    console.log(`${friends[1]} is your friend`)
}
*/

/*Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
    the code from first tip calculator challenge if you need to). Use the function
    type you like the most. Test the function using a bill value of 100
    2. And now let's use arrays! So create an array 'bills' containing the test data
    below
    Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
    */

/*function calctip(billvalue){
    const tip=billvalue >=50 && billvalue <=300? 0.15*billvalue: 0.2*billvalue;//type of if statement
/*if(billvalue>=50 && billvalue <=300){
    const tip=0.15*billvalue;
    const totalbill=tip+billvalue;
    console.log(`the tip is ${tip} and total bill is ${totalbill}`);

}
else {
    const tip=0.2*billvalue;
    const totalbill=tip+billbalue;
    console.log(`the tip is ${tip} and total bill is ${totalbill}`);

}
return tip=`${tip}`,totalbill=`${totalbill}`;*/

/*
return tip;
}
*/
/*
console.log(calctip(100));

  //And now let's use arrays! So create an array 'bills' containing the test data
   
bills=[125,555,44];

   //Create an array 'tips' containing the tip value for each bill, calculated from
   //the function you created before
console.log(calctip(bills[0]));
console.log(calctip(bills[1]));
console.log(calctip(bills[bills.length-1]));

const tips=[calctip(bills[0]),calctip(bills[1]),calctip(bills[bills.length-1])]
console.log(`tips are (${tips})`);

const totalbill=[calctip(bills[0])+ bills[0],calctip(bills[1]) +bills[1],calctip(bills[bills.length-1])+bills[bills.length-1]];

console.log(`totalbills are (${totalbill})`);

*/

//data structure OBJECT
//object literal syntax
/*
const jims={
    firstname: `jim`,
    lastname: `mburu`,
    age: 2037-1991,
    job: `programmer`,
    friend1:[`peter`,`kamau`,`vosti`]
};
console.log(jims);
*/
/*
const jims={
    firstname: `jim`,
    lastname: `mburu`,
    age: 2037-1991,
    job: `programmer`,
    friends:[`peter`,`kamau`,`vosti`]
};
console.log(jims);
  //getting a proprty from object
  
    //using the dot notation
console.log(jims.firstname,jims.lastname);
  //using the bracket notation

  console.log(jims[`lastname`]);

  const namekey=`name`; 
  console.log(jims[`first`+ namekey]);
  console.log(jims[`last`+ namekey]);
  const interestedin=prompt(`what do you want to know about jims?choose between firstname, lastname, age, job, and friends`);

console.log(jims[interestedin]);

if(jims[interestedin]){
    console.log(jims[interestedin]);
}else{
    console.log(`wrong request`);
}
 //adding new properties to object using dot and bracket notations

 jims.location=`kenya`;
 jims[`twiter`]=`@jonasschmedtman`;
 console.log(jims);
  //challenge
  //jim has 3 friends and his best friend is vosti
   //write the sentence

  console.log(`${jims.firstname} has ${jims.friends.length}  friends and his best friend is ${jims.friends[1]}`);

*/
/*
const jims={
    firstname: `jim`,
    lastname: `mburu`,
   birthyear: 1991,
    job: `programmer`,
    friends:[`peter`,`kamau`,`vosti`],
    hasdriverslicence: 0,

    //calcage: function (birthyear){
       // return 2037-birthyear;
    //}
    //trier
    //calcage: function (){
        //console.log(this);
       // return 2037-this.birthyear;
    //}
    calcage: function (){
       this.age=2037-this.birthyear;
        return this.age;
    },

     getsummary: function(){
   this.details= `${this.firstname} ${this.lastname} was born in ${this.birthyear} and he is ${this.age} years old.he is a ${this.job} by proffesion, he has ${this.friends.length} friends
   who are ${this.friends} and ${this.friends[2]} is his best friend. ${this.firstname} has ${this.hasdriverslicence ? `a`: `no `} drivers licence.`
   return this.details;
}
};


console.log(jims.calcage());


//console.log(jims[`calcage` ](1991));
console.log(jims.age);
console.log(jims.getsummary());
console.log(jims.details);
*/

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
GOOD LUCK


*/

//For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)

//Create a 'calcBMI' method on each object to calculate the BMI (the samemethod on both objects).
//Store the BMI value to a property, and also return it from the method
/*
const person1={
    firstname: `mark`,
    lastname: `miller`,
    weight: 78,
    height: 1.6,
    calcBMI: function (){
     return this.bmi=this.weight/ this.height ** 2;
      
    }
};
console.log(person1.calcBMI());


const person2={
    firstname: `john`,
    lastname: `smith`,
    weight: 200,
    height: 1.95,
    calcBMI: function (){
         return this.bmi=this.weight/ this.height ** 2; 
         
    }
};
console.log(person2.calcBMI());


//Log to the console who has the higher BMI, together with the full name and the
//respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

const higherbmiperson1=person1.bmi>person2.bmi;
 console.log(`${higherbmiperson1 ?  `${person1.firstname} ${person1.lastname} BMI (${person1.bmi}) is higher than
  ${person2.firstname} ${person2.lastname} BMI (${person2.bmi})`: `${person2.firstname} ${person2.lastname} BMI 
  (${person2.bmi}) is higher than ${person1.firstname} ${person1.lastname} BMI (${person2.bmi})` }`);

*/
/*
console.log(`lifting weights repeatition 1`);
console.log(`lifting weights repeatition 2`);
console.log(`lifting weights repeatition 3`);
*/
/*
//for loopkeeps running while condition is true
for(let rep=1; rep <= 10; rep++){
    console.log(`lifting weights repeatition ${rep}`);
}
*/
/*
const jims=[
    `jims`,
    `mburu`,
    2037-1991,
    `programmer`,
[`michael`,`peter`,`stephen`],
true

];
const types=[];

    //console.log(jims[0]);
    //console.log(jims[1]);
    //console.log(jims[2]);
    //console.log(jims[3]);
    //console.log(jims[4]);

    for(let i=0;i<jims.length;i++){
        console.log(jims[i],typeof jims[i]);
        //filling types array
        //types[i]=typeof jims[i];
        types.push(typeof jims[i]);
}

console.log(types);

const years=[1991,2007,1969,2000];
const ages=[];
for(let i=0;i<years.length;i++){
    ages.push(2037-years[i]);
    console.log(ages);
}
console.log(ages);

//continue and break statement
//continue //prints only the highlited typeof

console.log(`....ONLY STRINGS......`);
for(let i=0;i<jims.length;i++){
    if(typeof jims[i] !==`string`) continue;
    console.log(jims[i],typeof jims[i]);
    
}
//break //when it finds it target it terminates THE WHOLE LOOP
console.log(`....BREAK WITH NUMBER......`);
for(let i=0;i<jims.length;i++){
    if(typeof jims[i] ===`number`) break;
    console.log(jims[i],typeof jims[i]);
}
*/
/*
//printing backwards
const jims=[
    `jims`,
    `mburu`,
    2037-1991,
    `programmer`,
[`michael`,`peter`,`stephen`]

];
for(let i=jims.length-1;i>=0;i--){
    console.log(jims[i]);
}
//creating a lop inside a loop
for(let exercise=1;exercise<4;exercise++){
    console.log(`......startingexercise${exercise}`);

    for(let rep=1;rep<6;rep=rep+2){
        console.log(`exercise${exercise}=lifting weight repetition${rep}`);
    }
}
*/

//for(let rep=1;rep<=10;rep++){
// console.log(`lifting weight repetition${rep}`);}
/*
    let rep=1;
        while(rep<=10){
            console.log(`WHILE:lifting weight repetition${rep}`);
            rep++
        }

        let dice=Math.trunc(Math.random()*6)+1
        console.log(dice);
        while(dice!==6){
            console.log(`you rolled a dice ${dice}`);//infinite loop
            dice=Math.trunc(Math.random()*6)+1
            if(dice===6)console.log(`loop is about to end`);
        }
        
        */
const jimmy = 25;
console.log(jimmy);
