function duplicateNumber(price) {
    //let price=[40,10,25,10,50,1,25];
    console.log("\nthe original array is: " + price);
   
    price.push(36);
    console.log("the array after adding new element is: " + price);

    price.pop();
    console.log("the array after removing last element is: " + price);

    price.unshift(7, 25);
    console.log("the array after adding new element at first position is: " + price);   

    price.shift();
    console.log("the array after removing first element is: " + price);

     price.sort((a, b) => a - b);
    console.log("the sorted array is: " + price);

    let foundDuplicate = false;

for (let i = 0; i < price.length; i++) {
    for (let j = i + 1; j < price.length; j++) {
    if(price[i]===price[j])
    {
        console.log("the number is duplicate: " + price[i]);
        foundDuplicate = true;
        break;

    }
}
}
    if (foundDuplicate === false) {
        console.log("no duplicate found in the array");
    }
}

console.log("**********Test Case 1**********");
duplicateNumber([40,10,25,10,50,1,25]);

console.log("**********Test Case 2**********");
duplicateNumber([1,2,3,4,5,6,7,8,9,10]);

console.log("**********Test Case 3**********");
duplicateNumber([6,6,6,6]);
