import AddFav from "../AddFav/AddFav";

const DinosaurCard = ({ dinosaur }) => {
  return (
    <div className="border border-white rounded-lg overflow-hidden shadow-lg bg-gray-900 flex felx-col w-64 p-4">
      <div className="flex-1 flex flex-col">
        <AddFav itemId={dinosaur.id} />
        <img
          src={dinosaur.image}
          alt={dinosaur.name}
          className="w-full h48 object-cover rounded mb-4"
        />
        <h2 className="text-xl font-bold mb-2 text-center">{dinosaur.name}</h2>
        <p className="text-gray-300 text-sm text-center">
          {dinosaur.description}
        </p>
      </div>
    </div>
  );
};

export default DinosaurCard;
