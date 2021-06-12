import React, { useState } from 'react';
import './App.css';
import CardComponent from './components/Card';
import { Card, Typography, Space } from 'antd';
const cardDetails = [
  {
    title: 'APPLE',
    itembackColor: 'red',
    quantity: 10
  },
  {
    title: 'ORANGE',
    itembackColor: 'orange',
    quantity: 10
  },
  {
    title: 'GRAPES',
    itembackColor: '#6059c9',
    quantity: 10
  }
];

function App() {
  const [fruits, setFruits] = useState(cardDetails);
  const [basket, setbasket] = useState([]);
  const {Title} = Typography;

  const addToBasket = (item) => {
    if(item.quantity > 0) {
      setbasket([item, ...basket]);
      const newFruits = fruits.map(fruit => {
        if(item.title === fruit.title) {
          fruit.quantity -= 1;
        }
        return fruit;
      });
      setFruits(newFruits);
    }
  }

  const removeFromBasket = (item) => {
    if(basket.length > 0) {
      const topItem = basket[0];
      if(topItem.title === item.title) {
        const newBasket = basket.filter((basketItem, index) => index !== 0)
        const newFruits = fruits.map(fruit => {
          if(item.title === fruit.title) {
            fruit.quantity += 1;
          }
          return fruit;
        });
        setbasket(newBasket);
        setFruits(newFruits);
      }
    }
  }

  return (
    <>
      <Space style={{marginTop: 30}}>
        {fruits.map(card => 
          <CardComponent 
            key={card.title}
            card={card} 
            addItem={addToBasket}
            removeItem={removeFromBasket}
          />)}
      </Space>
      <Space style={{marginTop: 30, display:'flex', justifyContent: 'center', flexDirection:'column'}}>
        <Title level={5}>BASKET STACK</Title>
        <Card 
          style={{width: 200, height: 300, backgroundColor: '#FFF', borderColor: '#000' }}>
          {basket.map(baskItem => (
            <div className='item' style={{width: '100%', height: 10, backgroundColor: `${baskItem.itembackColor}`}}></div>)
          )}
        </Card>
      </Space>
    </>
  );
}

export default App;
