let data = "Hello World Test Test";

console.log(typeof data);

// length -> The length of the string
console.log("Length Is", data.length);

// chat at
console.log("Char at 11", data.charAt(11));

// using index
console.log("Value at index 1", data[1]);

// slice
console.log("Slicing", data.slice(2, 4)); //End index is not included
// sub string method won't accept negative val

// Lower case
console.log("To Lower case", data.toLowerCase());

// Upper case
console.log("To Upper case", data.toUpperCase());

// SPLIT
console.log("Split", data.split("e"));

// Trim
console.log("Trim", data.trim());

// replace
console.log("Replace", data.replaceAll("Test", "Testing"));

//  "qwerty asdf"
// ('') => ['q','w','e','r','t','y',' ','a','s','d','f']
// () => ["qwerty asdf"]
// (' ') => ['qwerty','asdf']
