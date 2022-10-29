var myFriendName = "Jenny";
var yourFriendName = "Billu";

console.log ("Before swipe");
console.log (myFriendName ,yourFriendName );

var temp = myFriendName;
myFriendName = yourFriendName;
yourFriendName = temp;

console.log("After swipe");
console.log(myFriendName ,yourFriendName);

console.log("***********************");

var num1 =  "100";
var num2 = "200";
var num3 = "300";

console.log (num1 ,num2,num3);
var seem = num1;
num1 = num2;
num2= num3;
num3 = seem;

console.log("After swipe");
console.log (num1 ,num2,num3);


var nutan = num3;
num1 = num3;
num2 = num3;
num1 = nutan;


console.log("After swipe");
console.log (num1 ,num2,num3);