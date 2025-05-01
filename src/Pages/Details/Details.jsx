import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Subtitle from "../../components/Subtitle/Subtitle";

const Details = ({t}) => {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <div className="container px-6 py-4 mx-auto">
        <Header />
        <main>
          <Subtitle text={t("Details.title")} />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Details;
