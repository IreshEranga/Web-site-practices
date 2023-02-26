//------------------------------------
//----------winnig team---------------
//------------------------------------

/*Sri lanka and england both played 3 match 1 day cricket series. In last 3 games SL scored 250,277,300 runs. while england scored 185,244,360 runs.

1.calculate the average score for the each team.
2.Decide which team wins in average (highest average score) and display the winner with the average score.
3.Then change scores to show different winners. Don't forget to take into account there might be draw.
*/


var avgsl, avgen, match1, match2, match3;

//SL 
match1 = parseFloat(prompt('Sri lanka match 01 score :'));
match2 = parseFloat(prompt('Sri lanka match 02 score :'));
match3 = parseFloat(prompt('Sri lanka match 03 score :'));

avgsl = (match1 + match2 + match3)/3;
console.log("Average of sri lanka :"+avgsl);

//EN
match1 = parseFloat(prompt('England match 01 score :'));
match2 = parseFloat(prompt('England match 02 score :'));
match3 = parseFloat(prompt('England match 03 score :'));


avgen = (match1 + match2 + match3)/3;
console.log("Average of England :"+avgen);

if(avgsl > avgen){
    alert('Sri lanka has highest average');
    console.log('Sri lanka has highest average');
}
else if(avgsl < avgen){
    alert('England has highest average');
    console.log("England has highest average");
}
else{
    alert('Both teams has same average');
    console.log("Both teams has same average");
}