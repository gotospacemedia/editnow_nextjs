"use client";

import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

const ConfettiWrapper = () => {
  const [windowDimension, setWindowDimension] = useState({
    width: 0,
    height: 0,
  });

  const detectSize = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    detectSize();
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <Confetti
        width={windowDimension.width}
        height={windowDimension.height}
        recycle={true}
        numberOfPieces={100}
        confettiSource={{
          x: 0,
          y: 0,
          w: windowDimension.width,
          h: 0,
        }}
        colors={["#7f014e"]}
        gravity={0.05}
        wind={0.01}
        initialVelocityY={2}
        tweenDuration={5000}
        run={true}
      />
    </div>
  );
};

export default ConfettiWrapper;
