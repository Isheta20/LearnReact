import React, { useEffect, useState, useCallback, useRef } from "react";

const PasswordGenerator = () => {
  const [len, setlen] = useState(8);
  const [noAllowed, setNoAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  //not for running the function but for memoization, to optimize it, keeps it in cache
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (noAllowed) str += "01233456789";
    if (charAllowed) str += "!@#$%^&*_+=[]{}~`";

    for (let i = 1; i <= len; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [len, noAllowed, charAllowed, setPassword]);
  // setPassword dependency added for optimization can also use password

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,101);//how much of the text to be selected depends on situtation
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [len, noAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="w-full bg-indigo-50 absolute max-w-4xl mx-auto left-0 right-0 top-12">
      <div className="bg-indigo-100 w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-10 py-3 text-indigo-600">
        <h2 className="text-2xl font-bold text-center m-2 text-gray-600">
          Password Generator
        </h2>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="bg-blue-600 text-white px-3 py-0.5 outline-none shrink-0 hover:bg-blue-700"
            onClick={copyPasswordToClipboard}
          >
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-1">
            <input
              type="range"
              min={6}
              max={100}
              value={len}
              className="cursor-pointer"
              onChange={(e) => {
                setlen(e.target.value);
              }}
            />
            <label>Length: {len}</label>
          </div>
          <div className="ml-1 flex items-center gap-1">
            <input
              type="checkbox"
              defaultChecked={noAllowed}
              id="noInput"
              className="cursor-pointer"
              onChange={() => {
                setNoAllowed((prev) => !prev);
              }}
            />
            <label>Number</label>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              className="cursor-pointer"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Character</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
