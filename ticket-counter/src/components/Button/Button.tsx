import "./Button.scss";

type buttonProps = {
  label: string;
  handleClick: () => void;
};

export const Button = ({ label, handleClick }: buttonProps) => {
  return (
    <button onClick={handleClick} className="button">
      <img src={label} className="button__image"/>
    </button>
  );
};
