import React from "react";
import Show from "../../components/Show/Show";

const Home = ({t}) => {
  return (
    <div>
      <Show texto={t("Home.welcome")} homefav={true} t={t} />
    </div>
  );
};

export default Home;
