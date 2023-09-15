
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




