// ⭐️ Example Challenge start ⭐️

/**
 * ### Challenge `addNumbers`
 * 
 * @instructions
 * This function should be able to take two numbers as arguments
 * and return the result of adding them together.
 * 
 * For example, if we invoke `addNumbers` passing 5 and 3,
 * the returned value should be 8.
 *
 * NOTE: This example has been completed for you.
*/
// function addNumbers(num1, num2) {
//   return num1 + num2;
// }

const addNumbers = (num1, num2) => num1 + num2;

// ⭐️ Example Challenge end ⭐️


// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇

/**
 * ### Challenge `makePersonObject`
 * 
 * @instructions
 * This function should take an id, a name and an email as arguments,
 * and return an object with `id`, `name` and `email` properties.
 * 
 * For example, if we invoke `makePersonObject`
 * passing 5, 'Leia' and 'leia@leia.com' as arguments,
 * the returned value should look like:
 * {
 *   id: 5,
 *   name: "Leia",
 *   email: "leia@leia.com",
 * }
*/

// ========My Solution below==================
function makePersonObject(id1, name1, email1) {
  return {
    id: id1,
    name: name1,
    email: email1,
  };
}
makePersonObject(5, "Leia", "leia@leia.com");

// function makePersonObject(id1, name1, email1)
// console.log(makePersonObject(5, 'Leia', 'leia@leia.com'));





/**
 *
 * ### Challenge `getName`
 * 
 * @instructions
 * This function takes as its only argument
 * an object containing a `name` property,
 * and return a string that reads `Hello, my name is {name}`,
 * where `{name}` is the name stored in the object.
 * 
 * For example, if we invoke `getName`
 * passing { id: 1, name: 'Leia', email: 'leia@leia.com` } as the argument,
 * the returned value should look like `Hello, my name is Leia`.
*/

// ========My Solution below==================
  function getName(name) {
    return `Hello, my name is ${name.name}`;
  }
// 

/**
 * ### Challenge `makeSmartPerson`
 * 
 * @instructions
 * This function takes a single `name` argument and returns an object.
 * The returned object has the following characteristics:
 *     It has a `name` property that contains the argument passed in.
 *     It has a `sum` method that takes two numbers as arguments
 *         and returns the result of adding them together.
 *     It has a `speak` method that takes no arguments
 *         and returns a string like `Hello, my name is {name}`.
 *         where `{name}` is the name passed into `makeSmartPerson`.
*/

function makeSmartPerson(name) {
  return {
    name: name,
    sum: function(num1, num2) {
      return num1 + num2; 
    },

    speak: function() {
      return `Hello, my name is ${this.name}`
    }      
  }
 }



/*
// ⭐️ Example Test Data ⭐️

var inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 4, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 5, car_make: "Mitsubishi", car_model: "Galant", car_year: 1990 },
  { id: 6, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  { id: 7, car_make: "Smart", car_model: "Fortwo", car_year: 2009 },
  { id: 8, car_make: "Audi", car_model: "4000CS Quattro", car_year: 1987 },
  { id: 9, car_make: "Ford", car_model: "Windstar", car_year: 1996 },
  { id: 10, car_make: "Mercedes-Benz", car_model: "E-Class", car_year: 2000 },
  { id: 11, car_make: "Infiniti", car_model: "G35", car_year: 2004 },
  { id: 12, car_make: "Lotus", car_model: "Esprit", car_year: 2004 },
  { id: 13, car_make: "Chevrolet", car_model: "Cavalier", car_year: 1997 },
  { id: 14, car_make: "Dodge", car_model: "Ram Van 1500", car_year: 1999 }
  /// ... Truncated
]
*/
/**
  * ### Example Array Challenge:
  * 
  * @instructions
  * get3rdCar() should return the string `The car is a Land Rover Defender Ice Edition`
  * 
  *
  * NOTE: This example has been completed for you.
**/
const get3rdCar = (invetory) => {
  return invetory.find((item,index) => index === 2)}


// function get3rdCar(inventory) {
//   const the3rd = inventory.find((item, index) => index === 2) // we use 2 because index is zero-based.
  
//   return `The car is a ${the3rd.car_make} ${the3rd.car_model}`
// }

// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇


/**
 * ### Challenge `getCarInfoByIndex`
 * 
 * @instructions
 * getCarInfoByIndex takes two arguments:
 *     (1) an array which is an inventory of cars like the preview above (see ⭐️ Preview Test Data ⭐️)
 *     (2) a number which is the desired index in the array.
 * getCarInfoByIndex returns a string in the format `This is a {car_make} {car_model}`
 * 
 * For example, if getCarInfoByIndex is invoked with the inventory and the number 0,
 * it will return `This is a Lincoln Navigator`.
*/

const getCarInfoByIndex = (inventory, index) => 
`This is a ${inventory[index].car_make} ${inventory[index].car_model}`

// function getCarInfoByIndex(inventory, index) {
//   return `This is a ${inventory[index].car_make} ${inventory[index].car_model}`
// };

/**
 * ### Challenge `getLastCarInfo`
 * 
 * @instructions
 * getLastCarInfo takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * getLastCarInfo returns a string in the format `This is a {car_make} {car_model}
 * 
 * For example, if getLastCarInfo is invoked passing the inventory inside /data/inventory.js,
 * it will return `This is a Lincoln Town Car`.
*/

const getLastCarInfo = (inventory) => 
`This is a ${inventory[inventory.length -1].car_make} ${inventory[inventory.length -1].car_model}`

// function getLastCarInfo(inventory) {
  // return `This is a ${inventory[inventory.length - 1].car_make} ${inventory[inventory.length - 1].car_model}`;
  
// }

/**
 * ### Challenge `getCarInfoById`
 * 
 * @instructions
 * getCarInfoById takes two arguments:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 *     (2) a number which is the desired car id (see how each car has its own unique id).
 * getCarInfoById returns a string in the format `This is a {car_make} {car_model}
 * 
 * For example, if getCarInfoById is invoked with the inventory and the number 1,
 * it will return `This is a Lincoln Navigator`.
*/
// function getCarInfoById(inventory, id) {
//   for (let car in inventory) {
//     if (inventory[car].id === id)
//     return `This is a ${(inventory[car].car_make)} ${(inventory[car].car_model)}`;
//   }
// }

  const getCarInfoById = function(inventory, id) {
    for (let car in inventory) {
      if (inventory[car].id === id) 
         return `This is a ${(inventory[car].car_make)} ${(inventory[car].car_model)}`
    }
  }


 /**
 * ### Challenge `sortCarInventory`
 * 
 * @instructions
 * sortCarInventory takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * sortCarInventory returns an inventory that is sorted by car_model, ascending [A-Z].
*/


const sortCarInventory = (inventory) => 
inventory.sort((a, b) => 
(a.car_model < b.car_model) ? -1 : a.car_model > b.car_model ? 1 : 0)
 
// const sortCarInventory = (inventory) => inventory.sort((a, b) => {
//   if (a.car_model < b.car_model) {
//     return -1}
//     if (a.car_model > b.car_model) {
//     return 1
//     }
//     else {return 0}
//   })

// function sortCarInventory(inventory) {
//   return inventory.sort 
//   ((a, b) => (a.car_model > b.car_model) ? 1 : a.car_model < b.car_model ? -1 : 0)
// }

/**
 * ### Challenge `getModelYears`
 * 
 * @instructions
 * We need the years from every car in the inventory!
 * getModelYears takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * getModelYears returns an array containing all the 'car_year's in the inventory.
*/
// function getModelYears(inventory) {
//   const newArr = [];

//   for (let i=0; i<inventory.length; i++) {
//     newArr.push(inventory[i].car_year);
//   }
//   return newArr;  
// }

const getModelYears = (inventory) => 
inventory.map(car => car.car_year)


/**
 * ### Challenge `getOlderCars`
 * 
 * @instructions
 * We need a utility to find older cars!
 * getOlderCars takes two arguments:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 *     (2) a number which is the desired max year.
 * getOlderCars returns an array containing all the cars
 * with a `car_year` which is at most the given desired max year,
 * in the same order as they appear in the original inventory.
*/

const getOlderCars = (inventory, year) => {
  return inventory.filter(car => 
    car.car_year <= year)
}

// function getOlderCars(inventory, year) {
//   const olderCar = [];
  
//   for (let i=0; i<inventory.length; i++) {
  
//     if(inventory[i].car_year <= year) {
//       olderCar.push(inventory[i]);
//     }
// }
// return olderCar;
// }

/**
 * ### Challenge `getGermanCars`
 * 
 * @instructions
 * We need a utility to find German cars!
 * getGermanCars takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * getGermanCars returns an array containing all the cars
 * made by either `Audi` or `Mercedes-Benz` or `Volkswagen` or `BMW`,
 * in the same order as they appear in the original inventory.
*/

const getGermanCars = (inventory) => 
  inventory.filter(car => 
    car.car_make === "Audi"|| car.car_make === "Mercedes-Benz"|| car.car_make === "Volkswagen"|| car.car_make === "BMW")


// function getGermanCars(inventory) {
  
//   const germanCars = []
  
//     for (let i=0; i<inventory.length; i++) {

//       if (inventory[i].car_make === "Audi" || 
//       inventory[i].car_make === "Mercedes-Benz" ||
//       inventory[i].car_make === "Volkswagen" ||
//       inventory[i].car_make === "BMW") {

//         germanCars.push(inventory[i])
      
//       }
//     }
//   return germanCars;
// }


/**
 * ### Challenge refactor to arrow functions
 * 
 * @instructions
 * Create arrow function versions of the following commented-out functions:
 * 
 * const sum = function (a, b) {
 *   return a + b
 * }
 * 
 * const addFive = function(num) {
*    return num + 5
 * }
 *
 * const argTimesTwo = function (num) {
 *   return num * 2
 * }
*/
const sum = (a, b) => a + b; 
const addFive = num => num + 5;
const argTimesTwo = num => num * 2;

/**
 * ### Challenge `carMaker`
 * THIS ONE IS A STRETCH GOAL. ATTEMPT IT ONLY AFTER
 * COMPLETING ALL NON-STRETCH CHALLENGES IN THE REPOSITORY!
 * 
 * @instructions
 * This function takes a single odometer argument (a number) and returns an object.
 * The returned object has the following characteristics:
 *     it has an `odometer` property that contains the argument passed in.
 *     it has a `drive` method that takes a distance as its argument, and
 *         (1) causes the odometer in the object to be increased by the distance,
 *         (2) returns the updated value of the `odometer`.
*/
// 
const carMaker = (num) => {
  return {
    odometer: num,
    drive: function(distance) {
      this.odometer = this.odometer + distance;
      return this.odometer;
    }
  }
}

// function carMaker(num) {
//   return {
//     odometer: num,
//     drive: function(distance) {
//       this.odometer = this.odometer + distance;
//       return this.odometer;
//     }
//   }
// }

/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  // IGNORE: Test/Env Detected
  // For Node/Non-browser test env
  module.exports = module.exports || {}
  if (addNumbers) { module.exports.addNumbers = addNumbers }
  if (makePersonObject) { module.exports.makePersonObject = makePersonObject }
  if (getName) { module.exports.getName = getName }
  if (makeSmartPerson) { module.exports.makeSmartPerson = makeSmartPerson }
  if (carMaker) { module.exports.carMaker = carMaker }
  if (getCarInfoByIndex) { module.exports.getCarInfoByIndex = getCarInfoByIndex }
  if (getLastCarInfo) { module.exports.getLastCarInfo = getLastCarInfo }
  if (getCarInfoById) { module.exports.getCarInfoById = getCarInfoById }
  if (sortCarInventory) { module.exports.sortCarInventory = sortCarInventory }
  if (getModelYears) { module.exports.getModelYears = getModelYears }
  if (getOlderCars) { module.exports.getOlderCars = getOlderCars }
  if (getGermanCars) { module.exports.getGermanCars = getGermanCars }
  if (sum) { module.exports.sum = sum }
  if (addFive) { module.exports.addFive = addFive }
  if (argTimesTwo) { module.exports.argTimesTwo = argTimesTwo }
}



// function getName(name) {
//   //   return `Hello, my name is ${name.name}`;
//   // }
  