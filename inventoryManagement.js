// Write your code here
let products =["Laptop", "Phone", "Headphones", "Monitor"];

function logFirstProduct() {return console.log (products[0]);
}

//Adds an item at the end of the array
function addProduct(name){products.push(name);}

//checks that the new position is valid (number should be positive, and not grater than the lengsth od the array)
function updateProductName(positionInArray, newName){if (positionInArray>=0 && positionInArray<products.length)
                                                      products[positionInArray]= newName;
                                                      else {console.log("Please enter a valid position to add the new product in.")}
}


function removeLastProduct() { products.pop();}


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
