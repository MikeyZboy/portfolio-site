import React from 'react';
import { useState, useEffect } from 'react';

const MemojiCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [screenSize, setScreenSize] = useState('desktop');

    useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setScreenSize('mobile');
            } else if (width < 1024) {
                setScreenSize('tablet');
            } else if (width < 1280) {
                setScreenSize('small-desktop');
            } else {
                setScreenSize('desktop');
            }
        };
        
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    // Responsive sizing based on screen size
    const getImageSize = () => {
        switch (screenSize) {
            case 'mobile':
                return { width: '173px', height: '173px' }; // 144px + 20%
            case 'tablet':
                return { width: '230px', height: '230px' }; // 192px + 20%
            case 'small-desktop':
                return { width: '288px', height: '288px' }; // 240px + 20%
            default: // desktop
                return { width: '360px', height: '360px' }; // 300px + 20%
        }
    };

    const imageSize = getImageSize();

    return (
        <div 
            className="relative flex items-center justify-center"
            style={{
                width: imageSize.width,
                height: imageSize.height,
                maxWidth: '100%',
                maxHeight: '100%'
            }}
        >
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image.src}
                    alt={image.alt || `Memoji ${index}`}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        opacity: currentIndex === index ? 1 : 0,
                        transition: 'opacity 1.5s ease-in-out',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        padding: '8px',
                        boxSizing: 'border-box'
                    }}
                />
            ))}
        </div>
    );
};

export default MemojiCarousel;