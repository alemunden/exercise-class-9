var classroomSupplies = ["pen", "paper", "desk", "computer"];
console.log(classroomSupplies); 
classroomSupplies.sort();
console.log(classroomSupplies); //[ 'pen', 'paper', 'desk', 'computer' ]

var travelPlaces = ["Toronto", "New York", "Australia", "Spain"];
console.log(travelPlaces); //[ 'Toronto', 'New York', 'Australia', 'Spain' ]

var bakingRecipies = ["brownies", "cookies", "cakes", "tarts"];
bakingRecipies.pop(3);
console.log(bakingRecipies); //'brownies', 'cookies', 'cakes'

var schedule = [
    ["COMP 1170", "Fundamentals Frontend Web Tech", "3.0"],
    ["MDIA 1055", "Vector Graphics", "3.0"],
    ["MDIA 1106", "Design", "3.0"],
    ["MDIA 1620", "Basic System Operations and Prog", "3.0"]
];
console.table(schedule);
console.log(`I am taking ${3, 0} that is worth ${3, 1} credits.`);
