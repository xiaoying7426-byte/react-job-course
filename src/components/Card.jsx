import React from "react";
const Card = ({ children, className = "" }) => (
  <div className={`bg-gray-100 p-6 rounded-lg shadow-md ${className}`}>
    {children}
  </div>
);

export default Card;