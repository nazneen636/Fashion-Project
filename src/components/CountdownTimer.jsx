// src/components/CountdownTimer.js
import React, { useEffect, useState } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
          2,
          "0"
        ),
        hours: String(
          Math.floor((difference / (1000 * 60 * 60)) % 24)
        ).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
          2,
          "0"
        ),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex space-x-4 text-center">
      {Object.keys(timeLeft).length ? (
        Object.keys(timeLeft).map((interval, index) => (
          <div key={index} className="text-black bg-white p-3 md:p-4 ">
            <p className="text-2xl md:text-[40px] font-extrabold font-poppins leading-[110%]">
              {timeLeft[interval]}
            </p>
            <p className="text-xs capitalize">{interval}</p>
          </div>
        ))
      ) : (
        <p className="text-2xl">Time's up!</p>
      )}
    </div>
  );
};

export default CountdownTimer;
