
var myName = "Rifat";

var lengthStr= myName.length;
var reverseStr= "";

myName.charAt(4);
myName.charAt(3);
myName.charAt(2);
myName.charAt(1);
myName.charAt(0);

for(let index=4; index >=0; index--)
{
    console.log(myName.charAt(index));
    reverseStr= reverseStr + myName.charAt(index)
}
console.log(reverseStr);

0+1+2+3+4+5
var add=0;
for(let index=0; index<=5; index++)
{
    add=add+index;
}
console.log('Addition is:${add}');
