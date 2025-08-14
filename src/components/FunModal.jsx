import React, { useState, useEffect } from 'react';
import { Modal, Card, Button } from 'antd';
import { LeftOutlined, RightOutlined, PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';

const funFacts = [
  {
    id: 1,
    fact: "I have had my life saved twice.",
    emoji: "🆘"
  },
  {
    id: 2,
    fact: "I have played soccer for 30 years.",
    emoji: "⚽"
  },
  {
    id: 3,
    fact: "I have driven the entire length of I-40.",
    emoji: "🛣️"
  },
  {
    id: 4,
    fact: "I cry every time I watch Cool Runnings.",
    emoji: "😭"
  },
  {
    id: 5,
    fact: "I cannot solve a Rubik's cube in under 2 minutes.",
    emoji: "🧩"
  },
  {
    id: 6,
    fact: "I've visited 13 different countries.",
    emoji: "🌍"
  },
  {
    id: 7,
    fact: "I'm fluent in English and Spanish (working on French and Italian).",
    emoji: "🗣️"
  },
];

export default function FunModal({ visible, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isPlaying && visible) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % funFacts.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, visible]);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % funFacts.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + funFacts.length) % funFacts.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const goToCard = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Modal
      title={
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span>Fun Facts About Me</span>
          <Button
            type="text"
            icon={isPlaying ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
            onClick={togglePlayPause}
            style={{ color: 'var(--highlight-500)' }}
          />
        </div>
      }
      open={visible}
      onCancel={onClose}
      footer={null}
      width={600}
      centered
    >
      <div style={{ textAlign: 'center', padding: '2rem 0' }}>
        {/* Main Card */}
        <Card
          style={{
            marginBottom: '2rem',
            border: `2px solid var(--highlight-300)`,
            borderRadius: '16px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
            backdropFilter: 'blur(10px)'
          }}
          bodyStyle={{ padding: '3rem 2rem' }}
        >
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
            {funFacts[currentIndex].emoji}
          </div>
          <div style={{ 
            fontSize: '1.5rem', 
            fontWeight: '500',
            color: 'var(--highlight-500)',
            lineHeight: '1.4',
            marginBottom: '1rem'
          }}>
            {funFacts[currentIndex].fact}
          </div>
          <div style={{ 
            fontSize: '0.9rem', 
            color: 'var(--highlight-400)',
            opacity: 0.7
          }}>
            {currentIndex + 1} of {funFacts.length}
          </div>
        </Card>

        {/* Navigation Controls */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <Button
            type="text"
            icon={<LeftOutlined />}
            onClick={prevCard}
            style={{ 
              color: 'var(--highlight-500)',
              fontSize: '1.2rem',
              width: '48px',
              height: '48px'
            }}
          />
          
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {funFacts.map((_, index) => (
              <Button
                key={index}
                type="text"
                size="small"
                onClick={() => goToCard(index)}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  padding: 0,
                  backgroundColor: index === currentIndex ? 'var(--highlight-500)' : 'var(--highlight-300)',
                  opacity: index === currentIndex ? 1 : 0.5,
                  border: 'none'
                }}
              />
            ))}
          </div>

          <Button
            type="text"
            icon={<RightOutlined />}
            onClick={nextCard}
            style={{ 
              color: 'var(--highlight-500)',
              fontSize: '1.2rem',
              width: '48px',
              height: '48px'
            }}
          />
        </div>

        {/* Progress Bar */}
        <div style={{ 
          width: '100%', 
          height: '4px', 
          backgroundColor: 'var(--highlight-200)',
          borderRadius: '2px',
          overflow: 'hidden'
        }}>
          <div
            style={{
              width: `${((currentIndex + 1) / funFacts.length) * 100}%`,
              height: '100%',
              backgroundColor: 'var(--highlight-500)',
              transition: 'width 0.3s ease',
              borderRadius: '2px'
            }}
          />
        </div>
      </div>
    </Modal>
  );
}
