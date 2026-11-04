function reverseString()
{
    let str = "testleafautomation";
    let rev="";

    for(let i = str.length - 1; i >= 0; i--)
    {
        char=str.charAt(i);
        rev=rev+char;
    }
    console.log("Reversed string: " + " " + rev);
}

//reverseString("testleafautomation"); this will be used when the parameter is passed to the function
reverseString();
