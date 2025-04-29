import React from "react";
import Title from "../../components/Title/Title";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import DinosaurCard from "../../components/DinosaurCard/DinosaurCard";

const Home = () => {

  const [dinosaurios, setDinosaurios] = useState([]);

  const getDinosaurios = async () => {
    try {
      const dinosResult = await fetch(`https://680fa72e67c5abddd1962419.mockapi.io/api/v1/dinosaurios`,);
      
      const dinos = await dinosResult.json();
      setDinosaurios(dinos);
    } catch (error) {
      console.log(`ERROR DESDE CONSOLA: ${error}`);
    }
  }

  useEffect(() => {
    getDinosaurios();
  }, []);

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <div className="container px-6 py-4 mx-auto">
        <Header />
        <main>
          <Title text={"Home"} />
          <div className="py-8 px-4">
            <div className="flex flex-wrap justify-center gap-8">
              {dinosaurios.map((dinosaur) => (
                <DinosaurCard key={dinosaur.id} dinosaur={dinosaur} />
              ))}
            </div>
          </div>
        </main>
        <div>
          <div className="h-screen"></div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
