/*Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) 😉
GOOD LUCK*/




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

function calctip(billvalue){
    const tip=billvalue >=50 && billvalue <=300? 0.15*billvalue: 0.2*billvalue;
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
return tip;
}
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













