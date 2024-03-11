import React, { useState, useEffect } from 'react';
import possibleFeaturesData from '../data/features.json';
import image1 from '../../img/image3.svg';
import image2 from '../../img/image1.svg';
import image3 from '../../img/image4.svg';
import image4 from '../../img/image2.svg';
import image5 from '../../img/image5s.svg';
import image6 from '../../img/image5.svg';

import './EdSpace.css'; 

const imagesMap = {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
};

const EdSpace = () => {
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    setFeatures(possibleFeaturesData);
  }, []);
  return (
    <div className="possible-container">
      <div className='content-container column'> 
     
<h2 className='h-2'>Возможности Ed Space</h2>
             
      <p className='possible-text'>Моменты перечислить корпоративную академию, базу знаний, учебные курсы, настроим систему мотивации обучения, круглосуточную поддержку.</p>
      <div className="possible-cards">
        
      {features.map((feature) => (
        <div key={feature.title} className="possible-item">
          <img src={imagesMap[feature.imageKey]} alt={feature.title} className="possible-image" />
     <div className="text-block">

     <h3 className='possible-block-h3'>{feature.title}</h3>
      <p className='possible-block-text'>{feature.text}</p>
     </div>
           
            </div>
  
))}
      </div>

<div className="possible-button">
<button className="button">Попробовать бесплатно</button>
</div>
      </div>
    </div>
  );
      };
export default EdSpace;
