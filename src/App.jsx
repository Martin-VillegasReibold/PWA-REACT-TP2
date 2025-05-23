import Home from "./Pages/Home/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Details from "./Pages/Details/Details.jsx";
import Favorites from "./Pages/Favorites/Favorites.jsx";
import Error404 from "./components/Error404/Error404.jsx";
import { ROUTES } from "./const/routes.js";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const toogleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
    localStorage.setItem("i18nextLng", newLang);
  };

  const flagSrc = i18n.language === "es" ? "/img/ES.png" : "/img/GB.png";

  return (
    <BrowserRouter>
      <div className="fixed top-35 right-6 z-50 cursor-pointer">
        <img
          src={flagSrc}
          className="w-10 h-10 hover:scale-110 transition-transform rounded-full shadow-md"
          onClick={toogleLanguage}
        />
      </div>
      <Routes>
        <Route element={<Home t={t} />} path={ROUTES.home} />
        <Route element={<Details t={t} />} path={ROUTES.details} />
        <Route element={<Favorites t={t} />} path={ROUTES.favorites} />
        <Route element={<Error404 t={t}/>} path={ROUTES.error404} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
