import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const ProjectsModal = ({ visible, onClose }) => {
  const [loading, setLoading] = useState(false);
  
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowModal(false);
    }, 3000);
  };
  
  const projectTitle = 'Returns AI Agent';
  const projectDescription =
  'A RAG based AI bot that reads an uploaded receipt and helps the user figure out the return policy and reminds them when the date approaches.';
  const projectFeatures = "I'll create a comprehensive front-end for your AI-powered receipt management system. This will include receipt upload, storage, product scanning, and return policy analysis with actionable insights. Key features implemented include receipt upload with dual modes (file upload or camera capture), a drag-and-drop interface, real-time processing simulation, a smart dashboard with tracked spending overview, urgent action items highlighting time-sensitive tasks, return deadline tracking, warranty reminders, receipt management with list views, status tracking, individual receipt detail modals, AI analysis for product identification, return policy extraction, actionable insights, and store-specific policy information. Additional features include priority-based action sorting, visual status indicators, responsive design, quick search, and calendar view buttons. The interface demonstrates how the AI analyzes receipts from stores like Best Buy and Target, extracting return policies, identifying products, and generating actionable deadlines to help users avoid missing return windows and register warranties properly.";
  if (!visible) return null;
    return (
    <>
      <Modal
        open={visible}
        title={projectTitle}
        onOk={onClose}
        onCancel={onClose}
        footer={[
          <Button key="back" onClick={onClose}>
            Back
          </Button>,
          <Button
            key="link"
            href="#"
            target="_blank"
            loading={loading}
            onClick={handleOk}
          >
            View on Github
          </Button>,
        ]}
      >
        <p>{projectDescription}</p>
      </Modal>
    </>
  );
};

export default ProjectsModal;
