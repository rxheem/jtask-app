import React from 'react';
import PopUpOverlay from '../popUpOverlay/PopUpOverlay';

// Import the icon here
import Icon from '../imgs/info_icon.png';

// Css
import './InfoIcon.css';

const InfoIcon = props => {
  return (
    <div>
      <PopUpOverlay
        key={props.key}
        placement={props.placement}
        tooltip={props.tooltip}
      >
        <img src={Icon} alt='info icon' className='info-icon' />
      </PopUpOverlay>
    </div>
  );
};

export default InfoIcon;
