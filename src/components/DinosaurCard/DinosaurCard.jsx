import AddFav from "../AddFav/AddFav";
import { useTranslation } from "react-i18next";
import Button from "../Button/Button";
import { ROUTES } from "../../const/routes";
import { useNavigate } from "react-router";

const DinosaurCard = ({ dinosaur, fav, setfav, t }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const navigate = useNavigate();

  const onClickNavigateToDetailsHandler = () => {
    navigate(`${ROUTES.details}`, {state: {dinosaur: dinosaur}});
  };
  
  return (
    <div className="border border-white rounded-lg overflow-hidden shadow-lg bg-gray-900 flex felx-col w-64 p-4">
      <div className="flex-1 flex flex-col">
        <AddFav itemId={dinosaur.id} favorites={fav} setFavorites={setfav} />
        <img
          src={dinosaur.image}
          alt={dinosaur.name}
          className="w-full h48 object-cover rounded mb-4"
        />
        <div className="mt-auto text-center">
          <h2 className="text-xl font-bold mb-2">{dinosaur.name}</h2>
          <p className="text-gray-300 text-sm">
            {dinosaur.description[lang]}
          </p>
        </div>
        <Button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
         text={t("Button.seeDetails")} onClick={onClickNavigateToDetailsHandler} />
      </div>
    </div>
  );
};

export default DinosaurCard;
