import React from 'react';
import posed from 'react-pose';

const Img = posed.img({
  hoverable: true,
  init: {
    filter: 'grayscale(80%) blur(0px)',
    height: 400,
    width: 300,
    position: 'absolute',
    left: 480,
    top: 150,
    borderRadius: 25,
  },
  hover: { filter: 'grayscale(0%) blur(0px)' },
});

const IMG = () => <Img src='https://res.cloudinary.com/aaronculp/image/upload/v1542405550/Portfolio/IMG_4199.jpg' className='big-image'/>;

export default IMG
