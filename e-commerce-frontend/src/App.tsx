import { useState } from "react";
import Button from "./components/Button";

function App() {
  // const fetchData = (Id: string) => {
  //   alert(`Id is ${Id}`);
  // };

  // states -Hook
  const [userName, setUsername] = useState<string>("Hello");

  const [like, setLike] = useState<number>(0);

  const updateUserName = () => {
    setUsername("98789");
  };
  const checkUserName = () => {
    alert(userName);
  };

  const UpdateLike = () => {
    setLike((prev) => prev + 1);
    setLike((prev) => prev + 1);
  };

  // UseEffect Hook

  return (
    <div>
      <Button text={`Like ${like}`} onClick={UpdateLike} type="Solid" />
      <h1>{userName}</h1>
      <Button
        text="Update Name"
        type="Outline"
        onClick={() => updateUserName()}
      />
      <Button text="Check Name" type="Solid" onClick={() => checkUserName()} />

      {/* Forms */}

      {/* Data Fetching */}
    </div>
  );
}

export default App;
