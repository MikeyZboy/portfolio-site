import React from 'react';
import { useState, useEffect } from 'react';

const MemojiCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <>
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image.src}
                    alt={image.alt || `Memoji ${index}`}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '99%',
                        height: '99%',
                        objectFit: 'contain',
                        opacity: currentIndex === index ? 1 : 0,
                        transition: 'opacity 1.5s ease-in-out',
                    }}
                />
            ))}
        </>
    );
};

export default MemojiCarousel;