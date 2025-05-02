import Item from "./Item";
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "./Menus";
const ItemsContainer = ({t}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={PRODUCTS} title={t("Footer.itemContainer.products")} t={t} />
      <Item Links={RESOURCES} title={t("Footer.itemContainer.resources")} t={t} />
      <Item Links={COMPANY} title={t("Footer.itemContainer.team")} t={t} />
      <Item Links={SUPPORT} title={t("Footer.itemContainer.support")} t={t} />
    </div>
  );
};

export default ItemsContainer;
