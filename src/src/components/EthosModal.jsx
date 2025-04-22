import React from 'react';
import { Modal, Typography, Button } from 'antd';

export default function EthosModal({ children, onClose, visible }) {
    const title = 'My Underlying Code';
    const footer = [
        <Button key="back" onClick={onClose} className="text-cyan-400 hover:text-cyan-300 m-2">
            Back
        </Button>,
    ];
    
    if (!visible) return null;
    return (
        <Modal
            open={visible}
            title={title}
            onOk={onClose}
            onCancel={onClose}
            footer={footer}
        >
            <Typography>
            Some would call them soft skills, but they are learned and earned through hard work.

            In every aspect of what I do, I strive to be present. Focused. Giving my undivided attention.
            This is a fundamental part of my work that I have learned after years of multi-tasking, multi-threading, and juggling multiple sales processes simultaneously.
            I didn't feel like I could be authentic and allow my brain to fully dive into the work I was doing. That wasn't for me.

            I grew invaluable skills in the sales world - active listening, seeing from the other's perspective, presenting and connecting professionally, and most importantly, never settle.

            It was the belief that I should never be settling and feeling stuck that I couldn't help the users I was selling to that lead me to become an Engineer. I was frustrated listening to how our software could improve their days, but how we were still missing the mark.
            I wanted to fix things. I started learning to code on FreeCodeCamp. I found myself trying to learn more Javascript and investigate Chrome Developer Tools to see how it worked.

            Covid hits and I now have loads of free time as buying processes for Visitor Management solutions screech to a halt. Goodbye Envoy, it's time to take this serious.

            Enroll in a full time, 12-week immersive Full-Stack program with General Assembly. I take in SO much in so little time - Javascript, React, Express, Node, Mongo, Blockchain, Python, OOP, Algorithms, SQL, RDBMS, etc.
            My head nearly explodes, but I love every single second of it.
        
            Now I bring the energy, focus, and user-centric eagerness to my software development. 
            On the front-end, I am focused on creating beautiful, simple user interfaces that are easy and delightful to click around. I also like dumb components upfront that are isolated and stripped of any identifiable data.
            On the back-end, I like to create fast, robust APIs, that...help me GPT!
            </Typography>
        </Modal>
    )

}