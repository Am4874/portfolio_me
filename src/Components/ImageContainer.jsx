import React from "react";

function ImageContainer({ src, altText, className, ...props }) {
  return (
    <span className={className}>
      <img src={src} alt={altText} {...props} />
    </span>
  );
}

export default ImageContainer;
