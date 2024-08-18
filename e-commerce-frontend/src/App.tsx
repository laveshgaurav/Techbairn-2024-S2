import { ChangeEvent, useEffect, useState } from "react";
import Button from "./components/Button";

function App() {
  // const fetchData = (Id: string) => {
  //   alert(`Id is ${Id}`);
  // };

  // states -Hook
  console.log("App Is Running");
  const [userName, setUsername] = useState<string>("Hello");

  type T_UserInput = {
    firstName: string;
    middleName: string;
    lastName: string;
  };

  const [userInput, setUserInput] = useState<T_UserInput>({
    firstName: "",
    middleName: "",
    lastName: "",
  });

  const [checked, setChecked] = useState<boolean>(true);

  const [userList, setUserList] = useState([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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

  const fetchData = async () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setUserList(json);
      });
  };

  useEffect(() => {
    console.log("In Use Effect");
    updateUserName();
    fetchData();
  }, []);

  return (
    <div>
      <Button text={`Like ${like}`} onFetchData={UpdateLike} type="Solid" />
      <h1>{userName}</h1>
      <Button
        text="Update Name"
        type="Outline"
        onFetchData={() => updateUserName()}
      />
      <Button
        text="Check Name"
        type="Solid"
        onFetchData={() => checkUserName()}
      />

      {/* Forms */}
      <input
        value={userInput.firstName}
        placeholder="Enter First Name"
        onChange={handleInputChange}
        name="firstName"
      />
      {/* checkbox */}
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />

      {/* Data Fetching */}

      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {userList.map(
            (data: { name: string; email: string; phone: string }, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
