import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "./Title";

const Search = ({ setSearch }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 after:content-[''] after:w-screen after:h-screen after:bg-red-600 after:absolute after:top-0 after:left-0 opacity-50 first-of-type:h-screen grid place-content-center">
      <OutsideClickHandler onOutsideClick={() => setSearch(false)}>
        <div className="w-full h-full grid place-content-center ">
          <div className="relative z-50 w-[600px] h-[600px] bg-white border p-5">
            <Title addClass="text-[40px] text-center">Search</Title>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Search;
