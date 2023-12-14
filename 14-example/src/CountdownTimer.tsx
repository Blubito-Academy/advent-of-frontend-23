import { useEffect, useRef, useState } from "react";
import "./CountdownTimer.scss";

export const CountdownTimer = (props: { targetDate: Date }) => {
  const interval = useRef<number>();
  const [countdown, setCountdown] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [countdownComplete, setCountdownComplete] = useState<boolean>(false);

  const formatNumber = (num: number): string => {
    return Intl.NumberFormat(undefined, { minimumIntegerDigits: 2 }).format(
      num
    );
  };

  const getTime = (deadline: number) => {
    const time = deadline - Date.now();

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const seconds = Math.floor((time / 1000) % 60);

    setCountdown({ days, hours, minutes, seconds });
    setCountdownComplete(
      days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0
    );
  };

  useEffect(() => {
    if (props.targetDate.getTime() < Date.now()) {
      setCountdownComplete(true);
      return;
    }

    interval.current = setInterval(
      () => getTime(props.targetDate.getTime()),
      1000
    );
  }, []);

  if (countdownComplete) {
    clearInterval(interval.current);
  }

  return (
    <div className="timer">
      {countdownComplete ? (
        <div className="img_container">
          <img
            className="message"
            src="/src/assets/Merry_Christmas.png"
            alt="Merry Christmas"
          />
        </div>
      ) : (
        ""
      )}
      <div className="countdown_container">
        <div className="card">
          <p>DAYS</p> <span>{formatNumber(countdown.days)}</span>
        </div>
        <div className="card">
          <p>HOURS</p> <span>{formatNumber(countdown.hours)}</span>
        </div>
        <div className="card">
          <p>MINUTES</p> <span>{formatNumber(countdown.minutes)}</span>
        </div>
        <div className="card">
          <p>SECONDS</p> <span>{formatNumber(countdown.seconds)}</span>
        </div>
      </div>
    </div>
  );
};
