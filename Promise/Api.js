const axios = require("axios");

async function getData() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users23"
    );
    const response2 = await axios.get(
      "https://jsonplaceholder.typicode.com/users23"
    );
    const response3 = await axios.get(
      "https://jsonplaceholder.typicode.com/users23"
    );
  } catch (e) {
    console.log("Error", e.message);
  }
}

getData();
