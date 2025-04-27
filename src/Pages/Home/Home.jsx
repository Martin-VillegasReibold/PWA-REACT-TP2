import React from "react";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";

const Home = () => {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <div className="container px-6 py-4 mx-auto">
        <Header/>
        <main>
          <Title text={"Home"} />
          <Input /> <br />
          <Button text={"Boton"} />
        </main>
      </div>
    </div>
  );
};

export default Home;
