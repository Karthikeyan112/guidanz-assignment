import React from 'react';
import './style.css';
import { Button, Card, Skeleton, Typography } from 'antd';
 
const CardComponent = ({ card, addItem, removeItem }) => {
  const { Title } = Typography;
  const cardStyle = {
    width: 200, 
    height: 300, 
    backgroundColor: `${card.itembackColor}`, 
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 8
  };
  const btnStyle = {
    backgroundColor: '#662ea3',
    border: 'none',
    color: '#FFF'
  };

  return (
    <Card style={cardStyle}>
      <Title level={3} style={{color: '#FFF'}}>{card.title}</Title>
      <Title level={3} style={{color: '#FFF'}}>{card.quantity}</Title>
      <div className='btn-container'>
        <Button shape='circle' style={btnStyle} onClick={() => addItem(card)}>+</Button>
        <Button shape='circle' style={btnStyle} onClick={() => removeItem(card)}>-</Button>
      </div>

    </Card>
  )
}

export default CardComponent;