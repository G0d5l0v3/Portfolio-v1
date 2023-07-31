import React from 'react';
import { Card } from 'antd';

const Cards = () => {
  const cardData = [
    {
      title: 'App Login Page',
      content: '',
    },
    {
      title: 'Products Card',
      content: '',
    },
    {
      title: 'Age Calculator',
      content: '',
    },
  ];

  return (
    <div className = "flex items-center flex-wrap justify-around" >
      {cardData.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          /*style={{
            width: 300,
            height: 400,
            borderRadius: 8,
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            marginBottom: 50
          }}*/
          className = "w-[300px] h-[400px] mb-[50px] shadow-md"
        >
          <p>{item.content}</p>
        </Card>
      ))}
    </div>
  );
};

export default Cards;
