import React from 'react';
import { Modal, Typography, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

export default function ExperienceModal({ children, onClose, visible }) {
    const title = 'Experience';
    const footer = [
        <div className="flex-row justify-right">
            <Button key="download" icon={<DownloadOutlined />} className="m-1">
            <a href="../assets/MikeZahutaCV.pdf" download="MikeZahutaCV.pdf">
                Download
            </a>
            </Button>
            <Button key="back" onClick={onClose} className="m-1">Back</Button>
        </div>
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
            <div>
                <Typography.Paragraph>
                    <h3 className="text-xl font-semibold">Full-Stack Software Engineer I</h3>
                    <p className="text-gray-400">IQVIA • Nov 2021-Present</p>
                    <p className="text-gray-400">• Currently on our flagship product, Strategy Workbench, empowering thousands of daily active users to design, plan, and execute life changing clinical trials</p>
                    <p className="text-gray-400">• Collaborate with cross-functional teams to design and implement new user features.</p>
                    <p className="text-gray-400">• Design, Discuss, Solutionize, and Develop product roadmap using technologies like Typescript, Python, Flask, SQLAlchemy, and Github.</p>
                    <p className="text-gray-400">• Conduct code reviews, engage in user feedback sessions, and provide knowledge transfer and coverage to peer developers.</p>
                </Typography.Paragraph>
                <Typography.Paragraph>
                    <h3 className="text-xl font-semibold">Software Engineering Immersive Bootcamp</h3>
                    <p className="text-gray-400">General Assembly • Jan 2020-Oct 2020</p>
                    <p className="text-gray-400">• Completed a 12-week immersive program in software engineering.</p>
                    <p className="text-gray-400">• Developed full-stack web applications using variations of PERN and MERN stack.</p>
                    <p className="text-gray-400">• Collaborated with peers on group projects and presentations.</p>
                </Typography.Paragraph>
                <Typography.Paragraph>
                    <h3 className="text-xl font-semibold">Mid-Market Account Executive</h3>
                    <p className="text-gray-400">Envoy • Jan 2019-Apr 2020</p>
                    <p className="text-gray-400">• Consultative Sales role working with companies between 201-1000 employees</p>
                    <p className="text-gray-400">• Teamed with Sales Engineers, Customer Success Managers, and API Engineers to ensure user satisifcation and help prioritize product roadmap</p>
                    <p className="text-gray-400">• Wanted to help code the solutions first hand so bad, I decided to change the course of my career</p>
                </Typography.Paragraph>
            </div>
        </Modal>
    );
}
