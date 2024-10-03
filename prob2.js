user =prompt("Enter your name");
let choice ;
console.log("choice");
let quantity =prompt("Enter the Quantity");
console.log("quantity");
let n = 0;
choice = parseInt(prompt("Enter your choice"));
window.alert(" Menu\n1.pizza\n2.burger\n3.mutton biriyani\n4.milkshake\n5.Pasta")
switch(choice){
    case 1 :
        n=200*quantity;
        break;
    case 2 :
        n=300*quantity;
        break;
    case 3 :
        n=250*quantity;
        break;
    case 4 :
        n=100*quantity;
        break;
    case 5 :
        n=80*quantity;
        break;
    default:
       console.log("Enter the correct price");
       break;
}
let discount = 0;
if(n>0){
if(n>500)
{
    discount = n*0.1;
    console.log("congratulations you have got an offer on your current order: "+discount);
}
else{
    console.log("Thankyou for ordering continue to order to get exciting offers");
}
console.log("TotalPricr: "+n)
}