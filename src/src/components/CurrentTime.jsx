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
    <div>
      <div
        className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <h2 className="text-white text-lg mb-2 font-medium">
          {isHovering ? 'Eastern Time (ET)' : 'Your Local Time'}
        </h2>
        <div className="text-white text-4xl font-bold">
          {isHovering ? formatEasternTime() : formatLocalTime()}
        </div>
        <p className="text-blue-100 mt-2 text-sm">
          {isHovering ? 'Showing ET time' : 'Hover to see Eastern Time'}
        </p>
      </div>
    </div>
  );
}