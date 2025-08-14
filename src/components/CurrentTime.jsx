import { useState, useEffect } from 'react';
import { Tooltip } from 'antd';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

export default function TimeDisplay() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isHovering, setIsHovering] = useState(false);
  const [screenSize, setScreenSize] = useState('desktop');
  
  // Check screen size with more granular breakpoints
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setScreenSize('mobile');
      } else if (width < 1024) {
        setScreenSize('tablet');
      } else if (width < 1240) {
        setScreenSize('small-desktop');
      } else {
        setScreenSize('desktop');
      }
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
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
    // Responsive sizing based on screen size
    let clockSize, hourHandLength, minuteHandLength, secondHandLength, hourHandWidth, minuteHandWidth, secondHandWidth;
    
    switch (screenSize) {
      case 'mobile':
        clockSize = 100;
        hourHandLength = 40;
        minuteHandLength = 52;
        secondHandLength = 52;
        hourHandWidth = 3;
        minuteHandWidth = 2;
        secondHandWidth = 1;
        break;
      case 'tablet':
        clockSize = 140;
        hourHandLength = 56;
        minuteHandLength = 72;
        secondHandLength = 72;
        hourHandWidth = 4;
        minuteHandWidth = 3;
        secondHandWidth = 1.5;
        break;
      case 'small-desktop':
        clockSize = 160;
        hourHandLength = 64;
        minuteHandLength = 82;
        secondHandLength = 82;
        hourHandWidth = 5;
        minuteHandWidth = 3.5;
        secondHandWidth = 1.8;
        break;
      default: // desktop
        clockSize = 175;
        hourHandLength = 70;
        minuteHandLength = 90;
        secondHandLength = 90;
        hourHandWidth = 6;
        minuteHandWidth = 4;
        secondHandWidth = 2;
    }
    
    return (
      <Clock
        value={isHovering ? formatEasternTime() : currentTime}
        size={clockSize}
        renderNumbers={true}
        hourHandLength={hourHandLength}
        minuteHandLength={minuteHandLength}
        secondHandLength={secondHandLength}
        hourHandWidth={hourHandWidth}
        minuteHandWidth={minuteHandWidth}
        secondHandWidth={secondHandWidth}
        hourHandStyle={{ backgroundColor: 'white' }}
        minuteHandStyle={{ backgroundColor: 'white' }}
        secondHandStyle={{ backgroundColor: 'red' }}
      />
    );
  }
  
  const mikesTime = `It's currently ${formatEasternTime()} for Mike.`;
  
  // Don't render on very small screens to prevent overlap
  if (screenSize === 'mobile') {
    return null;
  }
  
  return (
    <div
      className="p-1 bg-gradient-to-b from-black-900 to-highlight-600 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
      onMouseEnter={() => screenSize !== 'mobile' && setIsHovering(true)}
      onMouseLeave={() => screenSize !== 'mobile' && setIsHovering(false)}
      onTouchStart={() => screenSize === 'mobile' && setIsHovering(true)}
      onTouchEnd={() => screenSize === 'mobile' && setIsHovering(false)}
      style={{
        minHeight: screenSize === 'mobile' ? 'auto' : '180px',
        maxHeight: screenSize === 'small-desktop' ? '160px' : '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      <Tooltip 
        title={mikesTime} 
        placement={screenSize === 'mobile' ? "bottom" : "top"}
        overlayStyle={{
          fontSize: screenSize === 'mobile' ? '12px' : '14px',
          maxWidth: screenSize === 'mobile' ? '200px' : '250px'
        }}
      >
        <div 
          className="text-white font-bold flex items-center justify-center"
          style={{
            fontSize: screenSize === 'mobile' ? '0.875rem' : '1.125rem'
          }}
        >
          {renderAnalogClock()}
        </div>
      </Tooltip>
    </div>
  );
}