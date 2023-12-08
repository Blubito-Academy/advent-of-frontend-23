import { useEffect, useState } from "react";

/**
 * Simple spinner, rotation implemented with react state
 */
export const Spinner = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    // set a rotation interval for the spinning circle
    const interval = setInterval(() => {
      setRotation((prevRotation) => (prevRotation + 10) % 360);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        right: "8px",
        transform: "translateY(-50%)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
      }}
    >
      <span
        style={{
          border: "4px solid rgba(255, 255, 255, 0.3)",
          borderTop: "4px solid #fff",
          borderRadius: "50%",
          width: "18px",
          height: "18px",
          transform: `rotate(${rotation}deg)`,
        }}
      />
    </div>
  );
};
