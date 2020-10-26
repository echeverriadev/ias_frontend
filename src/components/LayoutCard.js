import React from 'react';
import { Card } from 'react-bootstrap';
import './LayoutCard.scss'

const LayoutCard = ({ children }) => {
  return <Card body className="body-app">{children}</Card>;
};

export default LayoutCard;
