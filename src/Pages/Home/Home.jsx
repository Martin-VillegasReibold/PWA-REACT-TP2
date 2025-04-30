import React from "react";
import Title from "../../components/Title/Title";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import DinosaurCard from "../../components/DinosaurCard/DinosaurCard";

const Home = () => {
  const [dinosaurios, setDinosaurios] = useState([]);
  const [filter, setFilter] = useState([]);

  const getDinosaurios = async () => {
    try {
      const dinosResult = await fetch(
        `https://680fa72e67c5abddd1962419.mockapi.io/api/v1/dinosaurios`
      );

      const dinos = await dinosResult.json();
      setDinosaurios(dinos);
      setFilter(dinos);
    } catch (error) {
      console.log(`ERROR DESDE CONSOLA: ${error}`);
    }
  };

  useEffect(() => {
    getDinosaurios();
  }, []);

  const fil = (event) => {
    setFilter(
      dinosaurios.filter((f) =>
        f.name.toLowerCase().includes(event.target.value)
      )
    );
  };

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <div className="container px-6 py-4 mx-auto">
        <Header filtro={fil} />
        <main>
          <span className=" text-4xl  py-8 font-bold flex flex-wrap justify-center">
            {" "}
            ¡Investiga sobre los seres de antaño!
          </span>
          <div className="py-8 px-4">
            <div className="flex flex-wrap justify-center gap-8">
              {filter.length > 0 ? (
                filter.map((dinosaur) => (
                  <DinosaurCard key={dinosaur.id} dinosaur={dinosaur} />
                ))
              ) : (
                <p>No se encontraron elementos que coincidan...</p>
              )}
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
