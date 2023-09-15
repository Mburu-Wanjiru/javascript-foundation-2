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

   //Create an arrow function 'calcAverage' to calculate the average of 3 scores

   const calcAverage=(a,b,c)=>(a+b+c)/3;
   console.log(calcAverage(23,78,34));

  // Use the function to calculate the average for both teams
  const avgdol=calcAverage(a,b,c);
const avgko=calcAverage(a,b,c);
//console.log(avgdol,avgko);

     /* Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!*/


function checkwinner(avgdol,avgko){
    if(avgdol>=2*avgko){
        console.log(`dolphin win (${avgdol} vs. ${avgko})`);
    }
    else if(avgko>=2*avgdol){
        console.log(`Koalas win (${avgko} vs. ${avgdol})`);
    }
    else{
        console.log(`no one wins`);
    }
    return 0;
}
console.log(checkwinner(avgdol.avgko));

     //Use the 'checkWinner' function to determine the winner for both Data 1 and
      //Data 2
//const checkwinner1=checkwinner(avgdol.avgko);
//console.log(checkwinner1);

const avgdol=calcAverage( 85,54,41);
const avgko=calcAverage(23,34,27);
console.log(avgdol,avgko);
const winnercheck2=checkwinner(avgdol,avgko);