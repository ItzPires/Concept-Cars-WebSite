import React from 'react';
import '../pages/Designers.css';

function DesignerInfo({ designer, index }) {
  const isEven = index % 2 === 0;

  const returnImage = (
    <>
      <img src={designer.imageSrc} alt={designer.name} className="img-designers" />
    </>
  );

  const returnText = (
    <>
      <div>
        <h2>{designer.name}</h2>
        <p>{designer.description}</p>
      </div>
    </>
  );

  const renderContent = (first) => {
    if (isEven && first) {
      return returnImage;
    } else if (isEven) {
      return returnText;
    }
    else if (first) {
      return returnText;
    } else {
      return returnImage;
    }
  };

  return (
    <div className="context">
      <div className={`col-3-6`}>
        <div className="content-wrapper">{renderContent(true)}</div>
      </div>
      <div className={`col-7-10`}>
        <div className="content-wrapper">{renderContent(false)}</div>
      </div>
    </div>
  );
}

export default DesignerInfo;
