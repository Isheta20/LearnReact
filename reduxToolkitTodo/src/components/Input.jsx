import { useEffect, useState } from "react";
// import PropTypes from "prop-types";

const Input = ({ isEditing, todo }) => {
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    setInputVal(todo?.title || "");
  }, [todo?.title]);

  const handleChange = (e) => {
    // console.log(inputVal);

    setInputVal(e.target.value);
    console.log(inputVal);
  };

  return (
    <>
      <input
        type="text"
        disabled={!isEditing}
        onChange={handleChange}
        value={inputVal}
        className="text-white bg-transparent border-0 focus:outline-none"
      />
    </>
  );
};

export default Input;
