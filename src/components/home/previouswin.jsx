import React from 'react';
import { Card, Row, Col, Typography, Button } from 'antd';
import { PlayCircleFilled, CheckCircleFilled } from '@ant-design/icons';
import './previouswin.css'; // Create this CSS file

const { Title, Text } = Typography;

const PreviousWinsShowcase = () => {
  const bigWins = [
    {
      id: 1,
      title: "$3,200 Win",
      type: "Single Bet",
      image: "/bet-slip-1.jpg",
      content: (
        <div className="win-content">
          <img 
            src="/payout-confirmation-1.jpg" 
            alt="Payout confirmation"
            className="win-proof"
          />
          <Text className="win-details">Premier League • 2.5 Odds</Text>
        </div>
      ),
      isVideo: false
    },
    {
      id: 2,
      title: "5-Ticket Parlay Win",
      type: "Multi Bet",
      image: "/client-celebrating.jpg",
      content: (
        <div className="win-content">
          <div className="video-thumbnail">
            <img 
              src="/client-celebrating.jpg" 
              alt="Client celebrating"
              className="win-proof"
            />
            <PlayCircleFilled className="play-icon" />
          </div>
          <Text className="win-details">Combined Odds: 12.4</Text>
        </div>
      ),
      isVideo: true
    },
    {
      id: 3,
      title: "Underdog Win: 8.0 Odds",
      type: "Value Bet",
      image: "/match-photo.jpg",
      content: (
        <div className="win-content">
          <img 
            src="/match-photo.jpg" 
            alt="Match photo"
            className="win-proof"
          />
          <div className="verified-badge">
            <CheckCircleFilled style={{ color: '#52c41a', marginRight: 8 }} />
            <Text strong>Verified Win</Text>
          </div>
        </div>
      ),
      isVideo: false
    }
  ];

  return (
    <section className="previous-wins-section">
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px' }}>
        {/* Section Header */}
        <Title level={2} className="section-title">
          Recent Big Wins
        </Title>
        
        {/* Wins Grid */}
        <Row gutter={[24, 24]} justify="center">
          {bigWins.map(win => (
            <Col key={win.id} xs={24} sm={12} md={8}>
              <Card
                hoverable
                className="win-card"
                cover={
                  <div className="win-image-container">
                    <img
                      alt={win.title}
                      src={win.image}
                      className="win-image"
                    />
                    <div className="win-type-tag">{win.type}</div>
                  </div>
                }
              >
                <Title level={4} className="win-amount">
                  {win.title}
                </Title>
                {win.content}
              </Card>
            </Col>
          ))}
        </Row>
        
        {/* Micro Copy CTA */}
        <div className="cta-container">
          <Text className="micro-copy">
            Next winner could be you – browse today's sure bets!
          </Text>
          <Button 
            type="primary" 
            size="large"
            className="cta-button"
            href="/bets"
          >
            View Today's Bets
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PreviousWinsShowcase;