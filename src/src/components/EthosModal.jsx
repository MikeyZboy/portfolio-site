import React from 'react';
import { Modal, Typography, Button } from 'antd';

const { Title, Text, Paragraph } = Typography;

export default function EthosModal({ children, onClose, visible }) {
    const title = <Title level={3}>My Career Code</Title>;
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
        {/* <div class="bg-gray-800 round-lg px-4 py-4 ring shadow-xl ring-gray-900/5"> */}
        <p class="font-mono text-sm-6 tracking-tight line-clamp-18 whitespace-normal overflow-auto text-gray-600 mt-2 mb-2">
            Some call them <em>soft skills</em>. I call them earned advantages — sharpened by years of high-pressure sales cycles, human-first problem solving, and relentless curiosity.
        <br />
        <br />
            In every environment, I’ve learned that presence is power. Not just being there, but being fully engaged — tuned in to what users are saying, what they need, and sometimes, what they can’t quite articulate yet. That skill didn’t come from coding bootcamps. It came from the sales floor, where multitasking and half-listening never led to real solutions. I knew there had to be a better way — a way to go deeper, to actually fix the problems I kept hearing from users.
        <br />
        <br />
            That’s what led me to software engineering.
        <br />
        <br />
            When I was selling software, I often found myself wishing I could just crack it open and fix what wasn’t working. So I started poking around in Chrome DevTools, tinkering with JavaScript tutorials on FreeCodeCamp — not because someone told me to, but because I needed to understand what was under the hood. When the pandemic hit and visitor management use-cases dried up, I saw it as an opening, not an ending.
        <br />
        <br />
            I enrolled in a 12-week immersive Full-Stack Software Engineering program with General Assembly. It was intense. JavaScript, React, Node, Express, SQL, MongoDB, Python, OOP, Algorithms, Blockchain — all in rapid succession. It felt like drinking from a firehose, but it was the most alive I had ever felt at work.
        <br />
        <br />
            Now, as a software engineer, I bring that same energy — the ability to listen deeply, think critically, and build with empathy. I approach every codebase with a user-first mindset and every team interaction with the professionalism honed through years of client-facing work. I’m not just writing code; I’m translating human needs into scalable, elegant solutions.
        <br />
        <br />
            This isn’t a career change — it’s a continuation of what I’ve always done: solving real problems for real people.
        </p>
        {/* </div> */}
        </Modal>
    )

}