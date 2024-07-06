// function
function CalculateAreaSquare(side) {
  if (typeof side !== "number") {
    console.log("Enter number only");
    return 0;
  }
  let area = side * side;
  return area;
}

let res = CalculateAreaSquare("50");
console.log(res);

// scopes

let i = 50;
{
  let i = 100;
  {
    let i = 200;
    console.log(i);
  }
}
