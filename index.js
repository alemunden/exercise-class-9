/**
 * Initalise the variable array 1 to an array containing the values 0, 1, 2, 3. Then, initialise the variable array 2 to the values of zero, one, two, three. Using the variable output and the .concat() method, concat the two arrays. Console log the output and write a single line comment as to what the output will be.  
 */

var array1 = [0, 1, 2, 3];
var array2 = ["one", "two", "three", "four"];
var output = array1.concat(array2);
console.log(output); // [ 0, 1, 2, 3, 'one', 'two', 'three', 'four' ]

/**        
 * Initialise the variable shopping list to a 2-D array containing the values below:
 * 
 *         column[0]   column[1]                           
* Row 1    2.00        Bread      
* Row 2    10.00       Muffins                     
* Row 3    16.50       Chicken                              
* Row 4    13.00       Cookies   
* 
* Use the console.table method to print the array in a table.
* Then, using the values stored in the array and concatenation, console log the following sentence: "I bought Chicken for 16.50."
*/

var shoppingList = [
    ["2.00", "Bread"],
    ["10.00", "Muffins"],
    ["16.50", "Chicken"],
    ["13.00", "Cookies"]
];
console.table(shoppingList);
console.log("I bought " + shoppingList[0,2] + " for " + shoppingList[1, 2] + ".");
