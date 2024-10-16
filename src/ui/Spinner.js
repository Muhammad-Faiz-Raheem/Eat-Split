import { useEffect, useState } from "react";

function Spinner() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 360);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="spinner-container">
      <div
        className="spinner"
        style={{ transform: `rotate(${rotation}deg)` }}
      ></div>
    </div>
  );
}

export default Spinner;
