import "./Button.scss";

type buttonProps = {
  label: string;
  handleClick: () => void;
  status:"active"|"disabled";
};

export const Button = ({ label, handleClick , status}: buttonProps) => {
  return (
    <button onClick={handleClick} className={"button button--"+status}>
      <img src={label} className="button__image"/>
    </button>
  );
};
