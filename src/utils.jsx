import React, { useEffect } from 'react'

function usePreventZoom(scrollCheck = true, keyboardCheck = true) {
    useEffect(() => {
      const handleKeydown = (e) => {
        if (
          keyboardCheck &&
          e.ctrlKey &&
          (e.keyCode == "61" ||
            e.keyCode == "107" ||
            e.keyCode == "173" ||
            e.keyCode == "109" ||
            e.keyCode == "187" ||
            e.keyCode == "189")
        ) {
          e.preventDefault();
        }
      };
  
      const handleWheel = (e) => {
        if (scrollCheck && e.ctrlKey) {
          e.preventDefault();
        }
      };
  
      document.addEventListener("keydown", handleKeydown);
      document.addEventListener("wheel", handleWheel, { passive: false });
  
      return () => {
        document.removeEventListener("keydown", handleKeydown);
        document.removeEventListener("wheel", handleWheel);
      };
    }, [scrollCheck, keyboardCheck]);
  }

function disablePinchZoom() {
useEffect(() => {
    const handleGestureStart = (e) => {
      e.preventDefault();
      document.body.style.zoom = '0.99';
    };

    const handleGestureChange = (e) => {
      e.preventDefault();
      document.body.style.zoom = '0.99';
    };

    const handleGestureEnd = (e) => {
      e.preventDefault();
      document.body.style.zoom = '1';
    };

    document.addEventListener('gesturestart', handleGestureStart);
    document.addEventListener('gesturechange', handleGestureChange);
    document.addEventListener('gestureend', handleGestureEnd);

    return () => {
      document.removeEventListener('gesturestart', handleGestureStart);
      document.removeEventListener('gesturechange', handleGestureChange);
      document.removeEventListener('gestureend', handleGestureEnd);
    };
  }, []);

};

export { usePreventZoom, disablePinchZoom }
