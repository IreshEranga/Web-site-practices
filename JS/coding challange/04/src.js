//---------------------------------------------------------
//---------------------Coding challenge--------------------
//---------------------------------------------------------
//-----------Tip calculator with objects and loops--------

/*
    Remember the tip calculater challenge ? Let's create more advance version using objects and loops.

    dasun and his friends went on a picnic. to get food they went 5 different restaurants for each meal. The bills are 1230, 982, 1640, 1460, 944.

    To tip the waiter a fair amount, dasun created a simple tip calculatoe (as a function). He likes to tip 20% of the bill when the bill is less than 1000, 15% when the bill is between 1000 and 1500, and 10% if the bill more than 1500.

    implement a tip calculator using objects and loops.
    1.create an object with an array for bill values
    2.add a methos to calculate tips
    3.this method should include a loop to iterate over all the paid bills and do the tip calculations
    4.as an output create two new arrays inside the object to store all tips and final amounts(tip+bill)
*/

//object
var billPay = {
    bill : [],
    tip : [],
    final : [],
    caltip : function(){
        for(var i =1; i<this.bill.length; i++)
        {
            var tp;
            if(this.bill[i] < 1000)
            {
                tp = this.bill[i] * (20/100);
            }
            else if(this.bill[i] <1500 && this.bill[i] >1000)
            {
                tp = this.bill[i] * (15/100);
            }
            else{
                tp = this.bill[i] * (10/100);
            }

            //calculate and add tip to the array
            this.tip[i] = tp;

            //add final bill
            this.final[i] = tp + this.bill[i];
        }
    }
}

//get inputs
for(var i=1; i<=5;i++){
    billPay.bill[i] = parseFloat(prompt("Enter bill amount :"));
}

//calling function
billPay.caltip();
console.log(billPay);
