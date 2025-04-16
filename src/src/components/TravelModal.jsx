import React from 'react';
import { Modal, Typography, Button } from 'antd';

export default function TravelModal({ children, onClose, visible }) {
    const title = 'The Places I Have Been';
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
            Need a cool interactive globe here
        </Modal>
    )

}