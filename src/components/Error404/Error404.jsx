import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Subtitle from "../../components/Subtitle/Subtitle";

const Error404 = ({ t }) => {
    return (
    <div className="bg-black text-white min-h-screen">
      <div className="container px-6 py-4 mx-auto">
        <Header t={t} />
        <main id="Main" className="bg-black">
          <Subtitle text={t("Error.title")} />
          <div className="flex-1 flex flex-col">
            <div className="mt-auto text-center">
              <h2 className="text-xl font-bold mb-2">
              {t("Error.detail")}{" "}
              </h2>
            </div>
          </div>
        </main>
        <Footer t={t} />
      </div>
    </div>
  );
};

export default Error404;