import React from 'react';
import './Developer.css';

function Developer({ developer }) {
  return (
    <div className="developer">
      <img src={developer.metadata.image.url} alt={developer.title} className="img-aboutus" />
      <div className="aboutus-item-title">{developer.title}</div>
      <div className="aboutus-item-description">{developer.metadata.description}</div>
    </div>
  );
}

export default Developer;
