import React, { useEffect, useState } from "react";

const LiveUserCount = () => {
  const [users, setUsers] = useState(283470000); 

  useEffect(() => {
    const interval = setInterval(() => {
      setUsers(prev => prev + Math.floor(Math.random() * 5)); 
    }, 100); 
    return () => clearInterval(interval);
  }, []);

  const formatNumber = num => num.toLocaleString();

  return (
    <h1 className="text-6xl font-bold text-yellow-400">
      {formatNumber(users)} <br />
      <span className="text-white">USERS TRUST US</span>
    </h1>
  );
};

export default LiveUserCount;
