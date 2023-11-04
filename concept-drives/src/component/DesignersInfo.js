import React from 'react';
import '../pages/Designers.css';

function DesignerInfo({ designer, index }) {
  const isEven = index % 2 === 0;

  return (
    <div className="context">
      <div className="col-3-6">
        <div className="content-wrapper">
          {isEven ? (
            <img src={designer.imageSrc} alt={designer.name} className="img-designers" />
          ) : (
            <>
              <h2>{designer.name}</h2>
              <p>{designer.description}</p>
            </>
          )}
        </div>
      </div>
      <div className="col-7-10">
        <div className="content-wrapper">
          {isEven ? (
            <>
              <h2>{designer.name}</h2>
              <p>{designer.description}</p>
            </>
          ) : (
            <img src={designer.imageSrc} alt={designer.name} className="img-designers" />
          )}
        </div>
      </div>
    </div>
  );
}

export default DesignerInfo;
