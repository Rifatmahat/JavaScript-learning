//swap the two numbers or string.....

function swap_values(arg3,arg4);
{
    console.log("------Before Swapping-------");
    console.log(arg3,arg4);
    var temp=arg3;
    arg3=arg4;
    arg4=temp;

    console.log("--------After Swapping-------");
    console.log(arg3,arg4);
}

swap_values("Rifat","Mahat");
swap_values("1111","0000")