import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Subtitle from "../../components/Subtitle/Subtitle";
import AddFav from "../../components/AddFav/AddFav";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Button from "../../components/Button/Button";

const Details = ({ t }) => {

  const {id} = useParams();
  const [dinosaur, setDinosaur] = useState();
  const navigate = useNavigate();

  const getDinosaur = async () => {
    try {
      const dinoResult = await fetch(
        `https://680fa72e67c5abddd1962419.mockapi.io/api/v1/dinosaurios/${id}`,
      );

      const dino = await dinoResult.json();

      if (!dino.id) {
        navigate("/404");
      } else {
        setDinosaur(dino);
      }

    } catch (error) {
      console.log(`ERROR DESDE CONSOLA: ${error}`);
    }
  };

  useEffect(() => {
    getDinosaur();
  }, [id]);

  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const { i18n } = useTranslation();
  const lang = i18n.language;

  const exportPDF = () => {
    const input = document.getElementById("Main");
    html2canvas(input, {
      logging: true,
      letterRendering: 1,
      useCORS: true,
    }).then((canvas) => {
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const imgData = canvas.toDataURL("img/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save(dinosaur.name);
    });
  };

  return dinosaur ? (
    <div className="bg-black text-white min-h-screen">
      <div className="container px-6 py-4 mx-auto">
        <Header t={t} />
        <main id="Main" className="bg-black">
            <div className="flex-1 flex flex-col">
              <Subtitle text={t("Details.title")} />
              <img
                src={dinosaur.image}
                alt={dinosaur.name}
                className="w-full h48 object-cover rounded mb-4"
              />
              <div className="mt-auto text-center">
                <h2 className="text-xl font-bold mb-2">
                  {t("Details.detailsDinosaur.name")}: {dinosaur.name}
                </h2>
                <h3 className="text-xl font-bold mb-2">
                  {t("Details.detailsDinosaur.period")}:{" "}
                  {dinosaur.period[lang]}
                </h3>
                <h3 className="text-xl font-bold mb-2">
                  {t("Details.detailsDinosaur.diet")}:{" "}
                  {dinosaur.diet[lang]}
                </h3>
                <h3 className="text-xl font-bold mb-2">
                  {t("Details.detailsDinosaur.length")}:{" "}
                  {dinosaur.length[lang]}
                </h3>
                <h3 className="text-xl font-bold mb-2">
                  {t("Details.detailsDinosaur.weight")}:{" "}
                  {dinosaur.weight[lang]}
                </h3>
                <h3 className="text-xl font-bold mb-2">
                  {t("Details.detailsDinosaur.location")}:{" "}
                  {dinosaur.location[lang]}
                </h3>
                <h3 className="text-xl font-bold mb-2">
                  {t("Details.detailsDinosaur.description")}:{" "}
                  {dinosaur.description[lang]}
                </h3>
                <h3 className="text-xl font-bold mb-2">
                  {t("Details.detailsDinosaur.favorite")} {" "}
                  <AddFav itemId={dinosaur.id} favorites={favorites} setFavorites={setFavorites} />
                </h3>
              </div>
            </div>
        </main>
        <div className="flex flex-wrap justify-center gap-8 py-6">
          <Button text={"Print PDF"} onClick={() => exportPDF()} />
        </div>
        <Footer t={t} />
      </div>
    </div>
  ) : null;
};

export default Details;
