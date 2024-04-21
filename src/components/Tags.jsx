import React from 'react';

export const Tags = ({ text, color }) => {
  const badgeClass = `badge bg-${color} text-white`;
  return (
    <span className={badgeClass}>{text}</span>
  );
};