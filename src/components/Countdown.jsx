import { useState, useEffect } from "react";
import PropTypes from "prop-types"; // Import the prop-types library


function Countdown({ seconds }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const days = Math.floor(seconds / (3600 * 24));
      const hours = Math.floor((seconds % (3600 * 24)) / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const secs = seconds % 60;

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds: secs,
      });

      if (seconds > 0) {
        seconds--;
      } else {
        clearInterval(countdownInterval);
      }
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, [seconds]);

  return (
    <div>
      <div style={{textAlign: 'center'}}>
        {timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes} minutes, {timeLeft.seconds} seconds
      </div>
    </div>
  );
}

// Prop validation using PropTypes
Countdown.propTypes = {
    seconds: PropTypes.number.isRequired, // Ensure the seconds prop is a required number
};

export default Countdown;
