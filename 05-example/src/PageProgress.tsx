import { useEffect, useState } from "react";

function throttle(func: () => void, delay: number) {
  let lastCallTime = 0;
  
  return (...args) => { 
    const now = Date.now();

    if (now - lastCallTime >= delay) {
      func.apply(this, args); 
      lastCallTime = now;
    }
  };
}

const PageProgress = () => {
  const [progess, setProgress] = useState(0);

  const getScroll = throttle(() => {
    setTimeout(() => {
      const val =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100;
      const rounded = Math.ceil(val);
      setProgress(rounded > 100 ? 100 : rounded);
    }, 100);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", getScroll, {
      passive: true,
    });
    return () => {
      window.removeEventListener("scroll", getScroll);
    };
  }, []);

  return (
    <div className="pageProgress">
      <div className="bar" style={{ width: `${progess}%` }}></div>
    </div>
  );
};

export default PageProgress;
