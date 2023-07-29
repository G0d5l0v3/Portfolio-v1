import React from 'react';
import { Card } from 'antd';

const Cards = () => {
  const cardData = [
    {
      title: 'Card 1',
      content: 'This is the content of Card 1.',
    },
    {
      title: 'Card 2',
      content: 'This is the content of Card 2.',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3.',
    },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {cardData.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          style={{
            width: 300,
            height: 400,
            borderRadius: 8,
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            marginBottom: 50
          }}
        >
          <p>{item.content}</p>
        </Card>
      ))}
    </div>
  );
};

export default Cards;
