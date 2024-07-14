let userData = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
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

// Spread Operator
// let { username, id, name, ...rest } = userData;

// console.log(geo);
// console.log({ ...userData, tested: true });

let data = [45, 32, 67, 85, 12];

let [a, b, ...rest] = data;

console.log(a);
console.log(rest);
