import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";
import SpeedDialAction from "./SpeedDialAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

type SpeedDialProps = {
  actions: { icon: IconDefinition; label: string }[];
  position: "top left" | "top right" | "bottom left" | "bottom right" | "top center" | "bottom center";
};

const SpeedDial = (props: SpeedDialProps) => {
    
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(false); 

  const handleOpen = () => {
    if(!focused) {
        setOpen(true);
        setFocused(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setFocused(false);
  };

  return (
    <div className={`speedDial ${props.position}`} onMouseLeave={handleClose}>
      <div
        className={`actionBtn ${open ? "open" : ""}`}
        onMouseEnter={handleOpen}
        onClick={() => setOpen(!open)}
      >
        <FontAwesomeIcon icon={faPlus} />
      </div>
      <ul className={`actions ${open ? "open" : ""}`}>
        {props.actions.map((action) => {
          return (
            <SpeedDialAction
              key={action.label}
              icon={action.icon}
              label={action.label}
              isOpen={open}
              onClick={handleClose}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default SpeedDial;
