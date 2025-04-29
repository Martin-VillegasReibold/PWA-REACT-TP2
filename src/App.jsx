import Home from "./Pages/Home/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Details from "./pages/Details/Details.jsx";
import Favorites from "./Pages/Favorites/Favorites.jsx";
import { ROUTES } from "./const/routes.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path={ROUTES.home} />
        <Route element={<Details />} path={ROUTES.details} />
        <Route element={<Favorites />} path={ROUTES.favorites}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
