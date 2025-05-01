import React from "react";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import DinosaurCard from "../../components/DinosaurCard/DinosaurCard";
import Subtitle from "../../components/Subtitle/Subtitle";

const Show = ({ texto, homefav, t }) => {
  const [dinosaurios, setDinosaurios] = useState([]);
  const [filter, setFilter] = useState([]);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  //Llamado API
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

  //Guardar LocalStorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  //Busqueda por nombre
  const fil = (event) => {
    setFilter(
      dinosaurios.filter((f) =>
        f.name.toLowerCase().includes(event.target.value)
      )
    );
  };

  //Coincidencia de IDs entre la API y el LocalStorage
  const showFav = filter.filter((id) => favorites.some((id2) => id.id === id2));

  return (
    <div>
      <div className="bg-gray-950 text-white min-h-screen">
        <div className="container px-6 py-4 mx-auto">
          <Header filtro={fil} t={t}/>
          <main>
            <Subtitle text={texto} />
            <div className="py-8 px-4">
              <div className="flex flex-wrap justify-center gap-8">
                {(homefav ? filter : showFav).length > 0 ? (
                  (homefav ? filter : showFav).map((dinosaur) => (
                    <DinosaurCard
                      key={dinosaur.id}
                      dinosaur={dinosaur}
                      fav={favorites}
                      setfav={setFavorites}
                    />
                  ))
                ) : (
                  <p>{t("notFound")}</p>
                )}
              </div>
            </div>
          </main>
          <Footer t={t}/>
        </div>
      </div>
    </div>
  );
};

export default Show;
