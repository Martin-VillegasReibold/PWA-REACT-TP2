import Title from "../../components/Title/Title";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";

const Details = () => {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <div className="container px-6 py-4 mx-auto">
        <Header />
        <main>
          <Title text={"Details"} />
        </main>
        <div>
          <div className="h-screen"></div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Details;