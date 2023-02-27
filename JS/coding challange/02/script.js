//---------------Tip calculator-----------------------------
//---------------------------------------------------------

/*
Dasun and his friends went on a picnic. To get food they went to 3 different restaurants for each meal. The bills are rs. 1230, 982, 1640.

To tip the waiter a fair amount dasun created a simple tip calculator(as a function). He likes to tip 20% of the bill when the bill is less than Rs. 1000, 15% when the bill between 1000 and 1500, and 10% if the bill is more than 1500

In the end dasun would like to have two arrays :
1.containing all 3 tips
2.containing all 3 final paid amounts(tip + bill)
*/

var billAmounts = new Array();
var tips = new Array();

//function
function tipCal(billAmount){
    var tip;
    if(billAmount < 1000)
    {
        tip = billAmount * (20/100);
    }
    else if(billAmount >= 1000 && billAmount < 1500)
    {
        tip = billAmount * (15/100);
    }
    else if(billAmount >= 1500)
    {
        tip = billAmount * (10/100);
    }
   
    //store in arrays
    tips.push(tip);
    billAmounts.push(billAmount+tip);

    return tip;
}

//calling
console.log('1 - tip :'+tipCal(1230));
console.log('2 - tip :'+tipCal(982));
console.log('3 - tip :'+tipCal(1640));