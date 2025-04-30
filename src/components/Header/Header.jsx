import React, { useState } from "react";
import { Link } from "react-router";
import Title from "../Title/Title";
import Button from "../Button/Button";
import Input from "../Input/Input";
const Header = ({ filtro }) => {
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState("");
  return (
    <nav className="... sticky top-0">
      <div className="relative flex gap-4 justify-between items-center mb-2">
        <Link to={"/"} className="flex gap-2">
          <img src="\klipartz.com.png" className="w-12" alt="Logo" />
          <Title text={"DinoWiki"} />
        </Link>

        <div className="font-bold text-md flex gap-2 items-center">
          <Link className="px-4 py-1 hover:bg-gradient-to-r to-blue-500 border-b-4 hidden lg:block">
            algo
          </Link>
          <button
            className={`py-0.5 hover:bg-gradient-to-r to-red-400 ${
              showCategories ? "bg-gradient-to-r to-red-400" : ""
            } border-b-4 hidden lg:block`}
            onClick={() => setShowCategories(!showCategories)}
          >
            <ion-icon name="ellipsis-vertical-outline"></ion-icon>
          </button>

          <div className="h-9 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded">
            <Link to={"/Favorites"}>Favoritos</Link>
          </div>
        </div>

        {showCategories && (
          <div className="absolute right-0 top-14 px-10 pt-6 pb-9 w-full bg-gray-900 text-white z-20">
            <span>Categorias</span>
            <hr />
            <div>
              <Link className="font-bol">Mas categorias</Link>
            </div>
          </div>
        )}
      </div>

      <Input onChange={filtro} />
    </nav>
  );
};

export default Header;
