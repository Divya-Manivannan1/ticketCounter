import "./Button.scss";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

type buttonProps = {
  label: string;
  handleClick: () => void;
  status: "active" | "disabled";
  tooltipContent: string;
};

export const Button = ({
  label,
  handleClick,
  status,
  tooltipContent,
}: buttonProps) => {
  return (
    <button onClick={handleClick} className={"button button--" + status}>
      <img
        data-tooltip-id="my-tooltip"
        data-tooltip-content={tooltipContent}
        src={label}
        className="button__image"
        data-tooltip-hidden={status == "disabled"}
      />
      <Tooltip className="button__tooltip" id="my-tooltip" place="bottom" />
    </button>
  );
};
