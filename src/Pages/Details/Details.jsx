import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Subtitle from "../../components/Subtitle/Subtitle";
import { useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Button from "../../components/Button/Button";

const Details = ({ t }) => {
  const location = useLocation();
  const stateDinosaur = location.state?.dinosaur;

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
      pdf.save(stateDinosaur.name);
    });
  };

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <div className="container px-6 py-4 mx-auto">
        <Header t={t} />
        <main id="Main" className="bg-black">
          <Subtitle text={t("Details.title")} />
          {stateDinosaur && (
            <div className="flex-1 flex flex-col">
              <img
                src={stateDinosaur.image}
                alt={stateDinosaur.name}
                className="w-full h48 object-cover rounded mb-4"
              />
              <div className="mt-auto text-center">
                <h2 className="text-xl font-bold mb-2">
                  {t("Details.detailsDinosaur.name")}: {stateDinosaur.name}
                </h2>
                <h3 className="text-xl font-bold mb-2">
                  {t("Details.detailsDinosaur.period")}:{" "}
                  {stateDinosaur.period[lang]}
                </h3>
                <h3 className="text-xl font-bold mb-2">
                  {t("Details.detailsDinosaur.diet")}:{" "}
                  {stateDinosaur.diet[lang]}
                </h3>
                <h3 className="text-xl font-bold mb-2">
                  {t("Details.detailsDinosaur.length")}:{" "}
                  {stateDinosaur.length[lang]}
                </h3>
                <h3 className="text-xl font-bold mb-2">
                  {t("Details.detailsDinosaur.weight")}:{" "}
                  {stateDinosaur.weight[lang]}
                </h3>
                <h3 className="text-xl font-bold mb-2">
                  {t("Details.detailsDinosaur.location")}:{" "}
                  {stateDinosaur.location[lang]}
                </h3>
                <h3 className="text-xl font-bold mb-2">
                  {t("Details.detailsDinosaur.description")}:{" "}
                  {stateDinosaur.description[lang]}
                </h3>
              </div>
            </div>
          )}
        </main>
        <div className="flex flex-wrap justify-center gap-8 py-6">
          <Button text={"Print PDF"} onClick={() => exportPDF()} />
        </div>
        <Footer t={t} />
      </div>
    </div>
  );
};

export default Details;
