import { useState } from "react";
import styles from "./CalCell.module.scss";

const CalCell = (props: {
  url: string;
  title?: string;
  icon: string;
  day: number;
  isDisabled: boolean;
  hasChallenge: boolean;
  isOpened: boolean;
}) => {
  const [opened, setOpened] = useState<boolean>(
    props.isOpened || Number(localStorage.getItem('opened')) === props.day
  );

  const handleOpen = () => {
    setOpened(true);
    localStorage.setItem('opened', props.day.toString());
  };

  return (
    <button
      className={`${styles.cell} ${
        props.hasChallenge && opened ? styles.open : ""
      }`}
      disabled={props.isDisabled}
      onClick={handleOpen}
    >
      <div className={styles.pane}>
        {props.hasChallenge ? (
          <img src={props.icon} alt="" />
        ) : (
          <h2>{props.day}</h2>
        )}
      </div>
      <div className={styles.content}>
      {opened ? <>
      <img src={props.icon} alt="" />
      <a href={props.url} target="_blank">
          <h4>{props.title}</h4>
        </a>
      </> : <></>}
      </div>
    </button>
  );
};

export default CalCell;
