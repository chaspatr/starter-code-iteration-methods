// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users);

// Append the katas to this element:
const main = document.querySelector("main");
function printKata(kataNumber, object) {
  // For the usage of the DETAILS and SUMMARY tags
  // in HTML, see: http://mdn.io/details-element
  const detailsElement = document.createElement("details");
  main.append(detailsElement);
  //
  const summaryElement = document.createElement("summary");
  summaryElement.append("KATA " + kataNumber);
  detailsElement.append(summaryElement);
  //
  // http://mdn.io/json.stringify
  const stringifiedObject = JSON.stringify(object);
  detailsElement.append(stringifiedObject);
}

//Kata 0
//Filter the users array to show only the users with an eyeColor property of "green".
const greenEyes1 = users.filter((user) => user.eyeColor === "green");
printKata(0, greenEyes1);

// Kata 1: Use the .filter() method
// Filter the users array to show only the users with an isActive property of true.
const activeUser = users.filter((user) => user.isActive === true);
printKata(1, activeUser);

// Kata 2: Use the .map() method
// Map over the users array to show only the email addresses of the users.
const emails = users.map((user) => user.email);
printKata(2, emails);

// Kata 3: Use the .some() method
// Check whether at least one user in the users array has a company property of "OVATION".
const ovationCheck = users.some((user) => user.company === "OVATION");
printKata(3, ovationCheck);

// Kata 4: Use the .find() method
// Find the first user in the array over the age of 38.
const firstAge38 = users.find((user) => user.age > 38);
printKata(4, firstAge38);

// Kata 5: Use the .filter() and .find() methods
// Find the first user in the array over the age of 38 who is active.
const active38 = users
  .filter((user) => user.isActive === true)
  .find((user) => user.age > 38);
printKata(5, active38);

// Kata 6: Use the .filter() and .map() methods
// Show the balance of every user in the array from the "ZENCO" company.
const zencoBalance = users
  .filter((user) => user.company === "ZENCO")
  .map((user) => user.balance);
printKata(6, zencoBalance);

// Kata 7: Use the .filter() method with .includes() and the .map() method
// Show the age of every user with the "fugiat" tag.

const fugiatAge = users
  .filter((user) => user.tags.includes("fugiat"))
  .map((user) => user.age);
printKata(7, fugiatAge);
