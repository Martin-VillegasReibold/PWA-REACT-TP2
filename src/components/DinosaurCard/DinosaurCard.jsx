import AddFav from "../AddFav/AddFav";

const DinosaurCard = ({ dinosaur, fav, setfav }) => {
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
            {dinosaur.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DinosaurCard;
