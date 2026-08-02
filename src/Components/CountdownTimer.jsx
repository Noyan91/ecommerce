import { useEffect, useRef, useState } from "react";

const getTimeLeft = (target) => {
  const diff = Math.max(0, target - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const pad = (n) => String(n).padStart(2, "0");

const CountdownTimer = ({ days = 3, hours = 23, minutes = 19, seconds = 56 }) => {
  const target = useRef(
    Date.now() + (((days * 24 + hours) * 60 + minutes) * 60 + seconds) * 1000
  );
  const [time, setTime] = useState(() => getTimeLeft(target.current));

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(target.current)), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    ["Days", time.days],
    ["Hours", time.hours],
    ["Minutes", time.minutes],
    ["Seconds", time.seconds],
  ];

  return (
    <div className="flex items-center gap-3 md:gap-6">
      {units.map(([label, value], i) => (
        <div key={label} className="flex items-center gap-3 md:gap-6">
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-1">{label}</p>
            <p className="text-2xl font-bold">{pad(value)}</p>
          </div>
          {i < units.length - 1 && <span className="text-secondary text-2xl font-bold">:</span>}
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
