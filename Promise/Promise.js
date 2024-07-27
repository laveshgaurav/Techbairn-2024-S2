// pending state
let newFunc = new Promise(function (resolve, reject) {
  let num = Math.random();
  if (num > 0.5) {
    //   Fulfilled state
    resolve({
      status: 200,
      data: true,
    });
  } else {
    // rejected state
    reject({
      status: 404,
      data: false,
    });
  }
});

let resp = newFunc
  .then((resp) => {
    let resp2 = newFunc
      .then(() => {
        let resp3 = newFunc.then(() => {}).catch();
      })
      .catch();
  })
  .catch((e) => console.log("Error", e))
  .finally("Completed Execution");
