import React from 'react';

const Image = ({ src }) => (
   <img
      src={src}
      style={{
         height: `100%`,
         width: `100%`,
         objectFit: `cover`
      }}
   />
);

export default Image;
