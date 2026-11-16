// Define the object type productDetails with optional properties
type productDetails=
{
    productId?:number;
    productName?:string;
    isAvailable?:boolean;
}

// assign the values to the object of type productDetails
let product:productDetails={
    productId:101,
    productName:"Laptop",
    isAvailable:true
}
console.log("Product ID: " + product.productId); // Output: 101
console.log("Product Name: " + product.productName); // Output: Laptop
console.log("Is Available: " + product.isAvailable); // Output: true
// modified the value of productName property
product.productName="Desktop";

delete product.isAvailable; // delete the isAvailable property from the object

console.log("After modified the Product Name: " + product.productName); // Output: Desktop


