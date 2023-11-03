import React from 'react';
import '../pages/Designers.css';

function DesignerInfo({ imageSrc, name, description, index }) {
  const isEven = index % 2 === 0;

  return (
    <div className="context">
      <div className="col-3-6">
        <div className="content-wrapper">
          {isEven ? (
            <img src={imageSrc} alt={name} className="img-designers" />
          ) : (
            <>
              <h2>{name}</h2>
              <p>{description}</p>
            </>
          )}
        </div>
      </div>
      <div className="col-7-10">
        <div className="content-wrapper">
          {isEven ? (
            <>
              <h2>{name}</h2>
              <p>{description}</p>
            </>
          ) : (
            <img src={imageSrc} alt={name} className="img-designers" />
          )}
        </div>
      </div>
    </div>
  );
}

export default DesignerInfo;
