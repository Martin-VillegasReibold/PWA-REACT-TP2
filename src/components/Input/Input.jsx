const Input = ({ onChange }) => {
  /*
  const handleChange = (evento) => {
    onChange(evento.target.value);
  };
*/
  return (
    <div className="flex relative">
      <input
        onChange={onChange}
        placeholder="Search by name..."
        className="w-full pl-4 pr-14 py-5 text-xl text-white rounded-tl rounded-bl border border-gray-300 outline-none"
      />
      <button className="bg-gray-700 text-white px-4 py-2 rounded-tr rounded-br">
        <ion-icon name="search-outline" className="-scale-x-100"></ion-icon>
      </button>
    </div>
  );
};

export default Input;
