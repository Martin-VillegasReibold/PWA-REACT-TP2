import React from "react";

const Subtitle = ({ text }) => {
  return (
    <span className=" text-4xl  py-8 font-bold flex flex-wrap justify-center">
      {text}
    </span>
  );
};

export default Subtitle;
