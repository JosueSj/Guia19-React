import React, { useState, useEffect } from 'react';

function Reloj() {
  const [time, setTime] = useState(new Date());

  // Actualiza la hora cada segundo
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000)//(1000) es 1 seg;

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <h1>{time.toLocaleTimeString()}</h1>;
}

export default Reloj;