import React, { useEffect } from 'react';
import '../styles/detail.css';
import AOS from 'aos';
import 'aos/dist/aos.css';




const Detail = ({ exerciseDetail }) => {
    useEffect(() => {
        AOS.init({
            duration : 3000
        });
    });
  const { bodyPart, gifUrl, name, target, equipment , instructions} = exerciseDetail;

  const extraDetail = [
    {
      icon: '/images/icons/bodyPart.png',
      name: bodyPart,
    },
    {
      icon: '/images/icons/target.png',
      name: target,
    },
    {
      icon:  '/images/icons/equipment.png',
      name: equipment,
    },
  ];

  return (
    <div className='detail' >
        
        <span class="bg__blur first_blur_det"></span>  
        <span class="bg__blur second__blur_det"></span>
        <div className='detail-image-container' >
        <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
        </div>

        <div className='detail-info' data-aos="zoom-in-up">
        <h1 >{name}</h1>
            <p>
                {instructions}
            </p>
            <div className='extra-detail'>
                {extraDetail.map((item, index) => (
                    <div className='extra-detail-item' key={index}>
                        <div className='extra-detail-img-container'>
                            <img src={item.icon} alt={item.name} className='extra-detail-img'/>
                        </div>
                        <p className='extra-detail-name'>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Detail;
