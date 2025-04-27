const Input = ({ onChange, value }) => {
    const handleChange = (evento) => {
      onChange(evento.target.value);
    };
  
    return (
      <input value={value} onChange={handleChange} />
    );
  };
  
  export default Input;