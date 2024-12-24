import { useState } from "react";
import React from "react";

const BgChanger = () => {
  const [color, setcolor] = useState("aliceblue");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button
            onClick={() => {
              setcolor("red");
            }}
            className="outline-none px-4 rounded-3xl py-2 text-gray-500"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => {
              setcolor("lightgreen");
            }}
            className="outline-none px-4 rounded-3xl py-2 text-gray-500"
            style={{ backgroundColor: "lightgreen" }}
          >
            Lightgreen
          </button>
          <button
            onClick={() => {
              setcolor("lavender");
            }}
            className="outline-none px-4 rounded-3xl py-2 text-gray-500"
            style={{ backgroundColor: "lavender" }}
          >
            Lavender
          </button>
          <button
            onClick={() => {
              setcolor("coral");
            }}
            className="outline-none px-4 rounded-3xl py-2 text-gray-500"
            style={{ backgroundColor: "coral" }}
          >
            Coral
          </button>
          <button
            onClick={() => {
              setcolor("yellowgreen");
            }}
            className="outline-none px-4 rounded-3xl py-2 text-gray-500"
            style={{ backgroundColor: "yellowgreen" }}
          >
            Yellowgreen
          </button>
        </div>
      </div>
    </div>
  );
};

export default BgChanger;
