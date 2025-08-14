import { useState, useEffect } from 'react';
import { Tooltip } from 'antd';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

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

  // v1: Analog Clock with a Tooltip telling difference in timezones
  // v2: Analog Clock with an Animation showing difference between the two timezones - forward or backwards

  const renderAnalogClock = () => {
    return (
      <Clock
        value={isHovering? formatEasternTime() : currentTime}
        size={175}
        renderNumbers={true}
        hourHandLength={70}
        minuteHandLength={90}
        secondHandLength={90}
        hourHandWidth={6}
        minuteHandWidth={4}
        secondHandWidth={2}
        hourHandStyle={{ backgroundColor: 'white' }}
        minuteHandStyle={{ backgroundColor: 'white' }}
        secondHandStyle={{ backgroundColor: 'red' }}
      />
    );
  }
  const mikesTime = `It's currently ${formatEasternTime()} for Mike.`;
  return (
      <div
        className="p-1 bg-gradient-to-b from-black-900 to-highlight-600 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <Tooltip title={mikesTime} placement="top">
        <div className="text-white text-2xl font-bold">
          {renderAnalogClock()}
        </div>
        </Tooltip>
      </div>
  );
}