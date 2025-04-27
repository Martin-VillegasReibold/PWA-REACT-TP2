import Home from "./pages/Home/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Details from "./pages/Details/Details.jsx";
import Favorites from "./Pages/Favorites/Favorites.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Details />} path="/details" />
        <Route element={<Favorites />} path="/favorites"/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
