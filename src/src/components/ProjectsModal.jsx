import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const ProjectsModal = ({ visible, onClose }) => {
  if (!visible) return null;

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
            href="https://google.com"
            target="_blank"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Search on Google
          </Button>,
        ]}
      >
        <p>{projectDescription}</p>
      </Modal>
    </>
  );
};

export default ProjectsModal;
