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
