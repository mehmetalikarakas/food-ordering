import React, { useState } from "react";
import Logo from "../ui/Logo";
import { FaUserAlt, FaSearch } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import Search from "../ui/Search";

const Header = () => {
  const [search, setSearch] = useState(false);

  return (
    <div className="h-[5.5rem] bg-secondary ">
      <div className="container mx-auto text-white flex justify-between items-center h-full">
        <div>
          <Logo />
        </div>

        <nav>
          <ul className="flex gap-x-2">
            <li className="px-[0.313rem] py-[1.25rem] hover:text-primary">
              <a href="" className="uppercase">
                Home
              </a>
            </li>
            <li className="px-[0.313rem] py-[1.25rem] hover:text-primary">
              <a href="" className="uppercase">
                Menu
              </a>
            </li>
            <li className="px-[0.313rem] py-[1.25rem] hover:text-primary">
              <a href="" className="uppercase">
                About
              </a>
            </li>
            <li className="px-[0.313rem] py-[1.25rem] hover:text-primary">
              <a href="" className="uppercase">
                Book Table
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex gap-x-4 items-center">
          <a href="#">
            <FaUserAlt className="hover:text-primary transition-all" />
          </a>
          <a href="#">
            <HiShoppingCart className="hover:text-primary transition-all" />
          </a>
          <button onClick={() => setSearch(true)}>
            <FaSearch className="hover:text-primary transition-all" />
          </button>
          <a href="#">
            <button className="btn-primary">Order Online</button>
          </a>
        </div>
      </div>
      {search && <Search setSearch={setSearch} />}
    </div>
  );
};

export default Header;
