type InputProps = {
  id: string;
};

const Input = ({ id }: InputProps) => {
  return (
    <label htmlFor={id}>
      {`Search by ${id.toLowerCase()}`}:
      <input
        type="text"
        id={id}
        autoComplete="off"
        className={`tile-container__${id}-input`}
      ></input>
    </label>
  );
};

export default Input;
