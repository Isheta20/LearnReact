import React, { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import User from "../User/User";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  function submitHandler(e) {
    e.preventDefault();
    console.log(username, password);
    setUser({ username, password });
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-8 w-2/6 m-auto p-8 bg-gray-500 my-4 text-white rounded-lg">
        <h2 className="text-center text-3xl font-semibold">Login</h2>
        <input
          type="text"
          placeholder="username"
          value={username}
          className="rounded-lg p-2 text-gray-800"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          className="rounded-lg p-2 text-gray-800"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={submitHandler}
          className="bg-orange-600 px-3 py-2 rounded-lg cursor-pointer "
        >
          Submit
        </button>
      </div>
      <User />
    </>
  );
};

export default Login;
