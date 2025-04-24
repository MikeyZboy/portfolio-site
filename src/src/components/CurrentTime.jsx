import { useState, useEffect } from 'react';

export default function TimeDisplay() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isHovering, setIsHovering] = useState(false);
  
  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    // Clean up interval on unmount
    return () => clearInterval(timer);
  }, []);
  
  // Format the time in user's local timezone
  const formatLocalTime = () => {
    return currentTime.toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };
  
  // Format the time in Eastern timezone
  const formatEasternTime = () => {
    return currentTime.toLocaleTimeString('en-US', {
      timeZone: 'America/New_York',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  return (
      <div
        className="flex-col text-center bg-gradient-to-b from-black-900 to-cyan-600 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <h2 className="text-white text-lg m-1 font-medium">
          {isHovering ? 'Eastern Time (ET)' : 'Your Local Time'}
        </h2>
        <div className="text-white text-4xl font-bold">
          {isHovering ? formatEasternTime() : formatLocalTime()}
        </div>
        <p className="text-blue-100 mt-2 text-sm">
          {isHovering ? 'Showing ET time' : 'Hover to see Eastern Time'}
        </p>
      </div>
  );
}