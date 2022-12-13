import Image from "next/legacy/image";
import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "./Title";
import { GiCancel } from "react-icons/gi";

const Search = ({ setSearch }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 after:content-[''] after:w-screen after:h-screen after:bg-white after:absolute after:top-0 after:opacity-50 after:left-0 first-of-type:h-screen grid place-content-center">
      <OutsideClickHandler onOutsideClick={() => setSearch(false)}>
        <div className="w-full h-full grid place-content-center ">
          <div className="relative z-50 md:w-[600px] w-[370px] border-2 border-primary p-10 rounded-3xl">
            <Title addClass="text-[40px] text-center">Search</Title>
            <input
              type="text"
              placeholder="Search..."
              className="border w-full my-10"
            />

            <ul className="mt-10">
              <li className="p-2 hover:bg-primary transition-all">
                <div className="flex items-center justify-between">
                  <Image
                    src="/images/f1.png"
                    alt="food"
                    width={48}
                    height={48}
                  />
                  <span className="font-bold">Good Pizza</span>
                  <span className="font-bold">$10</span>
                </div>
              </li>
              <li className="p-2 hover:bg-primary transition-all">
                <div className="flex items-center justify-between">
                  <Image
                    src="/images/f1.png"
                    alt="food"
                    width={48}
                    height={48}
                  />
                  <span className="font-bold">Good Pizza</span>
                  <span className="font-bold">$10</span>
                </div>
              </li>
              <li className="p-2 hover:bg-primary transition-all">
                <div className="flex items-center justify-between">
                  <Image
                    src="/images/f1.png"
                    alt="food"
                    width={48}
                    height={48}
                  />
                  <span className="font-bold">Good Pizza</span>
                  <span className="font-bold">$10</span>
                </div>
              </li>
            </ul>
            <button
              className="absolute top-10 right-10"
              onClick={() => setSearch(false)}
            >
              <GiCancel size={30} className="transition-all" />
            </button>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Search;
