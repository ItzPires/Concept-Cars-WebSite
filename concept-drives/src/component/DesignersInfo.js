import React, { useState, useEffect } from 'react';
import '../pages/Designers.css';

function DesignerInfo({ designer, index }) {
  const isEven = index % 2 === 0;
  const [isMobile, setIsMobile] = useState(false);

  const returnImage = (
    <>
      <img src={designer.imageSrc} alt={designer.name} className="img-designers" />
    </>
  );

  const returnText = (
    <>
      <div>
        <h2 className="name-designers">{designer.name}</h2>
        <p className="description-designers">{designer.description}</p>
      </div>
    </>
  );

  const renderContent = (first) => {
    if (isMobile && first)
      return returnImage;
    else if (isMobile)
      return returnText;
    else if (isEven && first)
      return returnImage;
    else if (isEven)
      return returnText;
    else if (first)
      return returnText;
    else
      return returnImage;
  };

  useEffect(() => {
    const checkIfMobile = () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    checkIfMobile();

    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

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
