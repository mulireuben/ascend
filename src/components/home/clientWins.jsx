import React from 'react';
import { Button, Card, Typography } from 'antd';
import { PlayCircleFilled } from '@ant-design/icons';
import './clientWins.css'; // Create this CSS file

const { Title, Text } = Typography;

const SocialProofSection = () => {
  // Sample video data
  const testimonialVideos = [
    {
      id: 1,
      thumbnail: '/client1-thumbnail.jpg',
      title: "James won $3,200"
    },
    {
      id: 2,
      thumbnail: '/client2-thumbnail.jpg',
      title: "Sarah's 5-ticket parlay"
    },
    {
      id: 3,
      thumbnail: '/client3-thumbnail.jpg',
      title: "Mike's underdog win"
    }
  ];

  return (
    <section className="parallax-section">
      {/* Background Image with Dark Overlay */}
      <div className="parallax-background">
        <div className="dark-overlay"></div>
      </div>
      
      {/* Content Container */}
      <div className="content-container">
        {/* Stats Overlay */}
        <div className="stats-overlay">
          <Title level={3} style={{ color: '#fff', margin: 0 }}>
            4,312 Tickets Booked
          </Title>
          <Title level={3} style={{ color: '#52c41a', margin: 0 }}>
            $1.2M Won Last Month
          </Title>
        </div>
        
        {/* Video Thumbnails Grid */}
        <div className="video-grid">
          {testimonialVideos.map(video => (
            <Card
              key={video.id}
              hoverable
              cover={
                <div className="video-thumbnail">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                  />
                  <PlayCircleFilled className="play-icon" />
                </div>
              }
              className="video-card"
            >
              <Text strong style={{ color: '#fff' }}>{video.title}</Text>
            </Card>
          ))}
        </div>
        
        {/* CTA Bar */}
        <div className="cta-bar">
          <Button 
            type="primary" 
            size="large"
            href="/how-it-works" // Link to your explainer video
            className="cta-button"
          >
            See How It Works →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;