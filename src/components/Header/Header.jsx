import React, { useState } from "react";
import { Link } from "react-router";
import Title from "../Title/Title";
import Input from "../Input/Input";
const Header = ({ filtro, t }) => {
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
            {t("Header.something")}
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
            <Link to={"/Favorites"}>{t("Header.favorites")}</Link>
          </div>
        </div>

        {showCategories && (
          <div className="absolute right-0 top-14 px-10 pt-6 pb-9 w-full bg-gray-900 text-white z-20">
            <span>{t("Header.options.categories")}</span>
            <hr />
            <div>
              <Link className="font-bol">{t("Header.options.moreCategories")}</Link>
            </div>
          </div>
        )}
      </div>

      <Input onChange={filtro} t={t} />
    </nav>
  );
};

export default Header;
