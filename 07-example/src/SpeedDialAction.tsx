import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SpeedDialActionProps = {
  icon: IconDefinition;
  label: string;
  onClick: () => void;
  isOpen: boolean;
};

const SpeedDialAction = (props: SpeedDialActionProps) => {
  return (
    <li
      className={`action ${props.isOpen ? "open" : ""}`}
      onClick={props.onClick}
    >
      <FontAwesomeIcon icon={props.icon} />
      <span className="tooltip">{props.label}</span>
    </li>
  );
};

export default SpeedDialAction;
