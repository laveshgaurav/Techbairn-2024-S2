let student1 = {
  // key : value
  // key can't be duplicate
  id: 1,
  name: "Leanne Graham",
  userName: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

console.log("User Latitude is", student1.address.geo.lat);

// Accessing the keys
console.log("Keys are", Object.keys(student1));

// Accessing the values
console.log("Values are", Object.values(student1));

// Checking is any keys are available or not
console.log(student1.address.hasOwnProperty("street"));
