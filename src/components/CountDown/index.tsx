import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const FlashSaleTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set the target date for the countdown (3 days from now)
    const targetDate = new Date().getTime() + 3 * 24 * 60 * 60 * 1000;

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
        });
      }
    };

    const timerInterval = setInterval(updateTimer, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  return (


    <div className="flex space-x-4 text-2xl font-bold">
      <div className="flex flex-col items-center">
        <p className="text-sm">Days</p>
        <span>{String(timeLeft.days).padStart(2, '0')}</span>
      </div>
      <span className="text-red-500">:</span>
      <div className="flex flex-col items-center">
        <p className="text-sm">Hours</p>
        <span>{String(timeLeft.hours).padStart(2, '0')}</span>
      </div>
      <span className="text-red-500">:</span>
      <div className="flex flex-col items-center">
        <p className="text-sm">Minutes</p>
        <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
      </div>
      <span className="text-red-500">:</span>
      <div className="flex flex-col items-center">
        <p className="text-sm">Seconds</p>
        <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
      </div>
    </div>

  );
};

export default FlashSaleTimer;
