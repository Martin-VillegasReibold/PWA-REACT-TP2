import React from "react";
import Show from "../../components/Show/Show";

const Favorites = ({t}) => {
  return (
    <div>
      <Show texto={t("Favorites.title")} homefav={false} t={t} />
    </div>
  );
};

export default Favorites;
