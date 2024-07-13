let timer = 1000;

function Parent(child) {
  console.log("Executing Parent");
  child();
  console.log("Child Executed");
}

function Result() {
  console.log("Executing Result");
}

Parent(Result);
