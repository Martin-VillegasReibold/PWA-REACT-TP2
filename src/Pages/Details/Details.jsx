import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Subtitle from "../../components/Subtitle/Subtitle";
import { useLocation } from "react-router";
import { useTranslation } from "react-i18next";

const Details = ({t}) => {

  const location = useLocation();
  const stateDinosaur = location.state?.dinosaur;

  const { i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <div className="container px-6 py-4 mx-auto">
        <Header t={t}/>
        <main>
          <Subtitle text={t("Details.title")} />
            {stateDinosaur && (
              <div className="flex-1 flex flex-col">
              <img src={stateDinosaur.image}
                   alt={stateDinosaur.name}
              className="w-full h48 object-cover rounded mb-4"/>
              <div className="mt-auto text-center">
                <h2 className="text-xl font-bold mb-2">{t("Details.detailsDinosaur.name")}: {stateDinosaur.name}</h2>
                <h3 className="text-xl font-bold mb-2">{t("Details.detailsDinosaur.period")}: {stateDinosaur.period[lang]}</h3>
                <h3 className="text-xl font-bold mb-2">{t("Details.detailsDinosaur.diet")}: {stateDinosaur.diet[lang]}</h3>
                <h3 className="text-xl font-bold mb-2">{t("Details.detailsDinosaur.length")}: {stateDinosaur.length[lang]}</h3>
                <h3 className="text-xl font-bold mb-2">{t("Details.detailsDinosaur.weight")}: {stateDinosaur.weight[lang]}</h3>
                <h3 className="text-xl font-bold mb-2">{t("Details.detailsDinosaur.location")}: {stateDinosaur.location[lang]}</h3>
                <h3 className="text-xl font-bold mb-2">{t("Details.detailsDinosaur.description")}: {stateDinosaur.description[lang]}</h3>
              </div>
              </div>)}
        </main>
        <Footer t={t}/>
      </div>
    </div>
  );
};

export default Details;
