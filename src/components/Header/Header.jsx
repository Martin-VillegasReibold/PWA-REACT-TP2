import React from "react";
import { Link } from "react-router";
import Title from "../Title/Title";
import Input from "../Input/Input";
const Header = ({ filtro, t }) => {
  return (
    <nav className="... sticky top-0 bg-gray-950 z-50">
      <div className="relative flex gap-4 justify-between items-center mb-2">
        <Link to={"/"} className="flex gap-2">
          <img src="\klipartz.com.png" className="w-12" alt="Logo" />
          <Title text={"DinoWiki"} />
        </Link>

        <div className="font-bold text-md flex gap-2 items-center">
          <div className="h-9 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded">
            <Link to={"/Favorites"}>{t("Header.favorites")}</Link>
          </div>
        </div>
      </div>

      <Input onChange={filtro} t={t} />
    </nav>
  );
};

export default Header;
