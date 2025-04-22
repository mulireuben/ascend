import React, { useState, useEffect } from 'react';
import { Card, Carousel, Typography, Button, Tag, Space } from 'antd';
import { FireOutlined, ClockCircleOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const FlashOffersCarousel = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 30,
    seconds: 0
  });

  // Sample offers data
  const offers = [
    {
      id: 1,
      title: "Premier League Special",
      description: "Get enhanced odds on Man City vs Arsenal",
      odds: "4.50 → 5.25",
      code: "FLASH25",
      expiry: "02:30:00"
    },
    {
      id: 2,
      title: "NBA Parlay Boost",
      description: "20% extra winnings on 3+ leg parlays",
      odds: "Boost +20%",
      code: "PARLAY20",
      expiry: "01:45:00"
    },
    {
      id: 3,
      title: "Underdog Insurance",
      description: "Money back if underdog wins by 2+",
      odds: "Risk-Free",
      code: "DOGSAFE",
      expiry: "04:15:00"
    }
  ];

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const { hours, minutes, seconds } = prev;
        if (hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(timer);
          return prev;
        }
        
        if (seconds === 0) {
          if (minutes === 0) {
            return { hours: hours - 1, minutes: 59, seconds: 59 };
          }
          return { ...prev, minutes: minutes - 1, seconds: 59 };
        }
        return { ...prev, seconds: seconds - 1 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ 
      margin: '40px 0',
      padding: '20px',
      background: 'linear-gradient(135deg, #f5222d 0%, #fa541c 100%)',
      borderRadius: '12px'
    }}>
      <Title level={3} style={{ color: '#fff', textAlign: 'center', marginBottom: 24 }}>
        <FireOutlined /> FLASH OFFERS <FireOutlined />
      </Title>

      <Carousel 
        autoplay 
        dotPosition="top"
        effect="fade"
        style={{ background: '#fff', borderRadius: '8px', padding: '16px' }}
      >
        {offers.map(offer => (
          <div key={offer.id}>
            <Card
              bordered={false}
              style={{ boxShadow: 'none' }}
              bodyStyle={{ padding: '24px' }}
            >
              <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                <Tag color="gold" style={{ fontSize: '16px', padding: '8px' }}>
                  LIMITED TIME!
                </Tag>
                
                <Title level={4}>{offer.title}</Title>
                <Text>{offer.description}</Text>
                
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap'
                }}>
                  <div>
                    <Text strong>Enhanced Odds: </Text>
                    <Text strong underline>{offer.odds}</Text>
                  </div>
                  
                  <Tag color="red" icon={<ClockCircleOutlined />}>
                    {`${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
                  </Tag>
                </div>
                
                <div style={{ 
                  animation: 'pulse 2s infinite',
                  textAlign: 'center',
                  marginTop: '16px'
                }}>
                  <Text keyboard style={{ fontSize: '18px' }}>
                    USE CODE: {offer.code}
                  </Text>
                </div>
                
                <Button 
                  type="primary" 
                  size="large" 
                  block
                  danger
                  style={{ 
                    height: '50px',
                    fontWeight: 'bold',
                    marginTop: '16px'
                  }}
                >
                  CLAIM OFFER NOW
                </Button>
              </Space>
            </Card>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default FlashOffersCarousel;