// src/components/Tooltip.js
import React from 'react';
import './Tooltip.css'; // Create a CSS file for Tooltip styles

const Tooltip = ({ text }) => (
    <div className="tooltip">
        {text}
    </div>
);

export default Tooltip;
