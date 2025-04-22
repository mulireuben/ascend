import React from 'react';
import { 
  Row, Col, Card, Typography, Table, Collapse, Button, Space 
} from 'antd';
import { 
  NotificationOutlined, PieChartOutlined, TeamOutlined,
  CrownOutlined, CheckOutlined, StarOutlined 
} from '@ant-design/icons';

const { Title, Text } = Typography;

const ServiceCard = ({ icon, title, description, features, price }) => (
  <Card
    hoverable
    style={{ height: '100%', borderRadius: 12 }}
    cover={
      <div style={{ 
        background: '#f0f5ff', 
        padding: 24, 
        textAlign: 'center',
        fontSize: 48
      }}>
        {icon}
      </div>
    }
  >
    <Title level={4}>{title}</Title>
    <Text type="secondary">{description}</Text>
    <ul style={{ margin: '16px 0', paddingLeft: 20 }}>
      {features.map((f, i) => (
        <li key={i} style={{ marginBottom: 8 }}>
          <CheckOutlined style={{ color: '#52c41a', marginRight: 8 }} />
          {f}
        </li>
      ))}
    </ul>
    <Text strong style={{ fontSize: 18 }}>{price}</Text>
  </Card>
);

const ServicesPage = () => {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: 24 }}>
      {/* Hero */}
      <section style={{ textAlign: 'center', marginBottom: 48 }}>
        <Title level={2} style={{ fontSize: 36 }}>
          <CrownOutlined /> Premium Betting Services
        </Title>
        <Text type="secondary" style={{ fontSize: 18 }}>
          AI-driven tools used by 12,000+ winning bettors
        </Text>
      </section>

      {/* Services Grid */}
      <Row gutter={[24, 24]} style={{ marginBottom: 48 }}>
        <Col xs={24} sm={12} md={8}>
          <ServiceCard
            icon={<NotificationOutlined />}
            title="VIP Odds Alerts"
            description="Never miss a sure bet"
            features={[
              "5+ value bets daily",
              "95% accuracy",
              "1-tap booking"
            ]}
            price="Free trial"
          />
        </Col>
        <Col xs={24} sm={12} md={8}>
          <ServiceCard
            icon={<PieChartOutlined />}
            title="Smart Portfolio"
            description="Optimize your bets"
            features={[
              "Risk analyzer",
              "Auto-diversification",
              "ROI reports"
            ]}
            price="$29/month"
          />
        </Col>
        <Col xs={24} sm={12} md={8}>
          <ServiceCard
            icon={<TeamOutlined />}
            title="Pro Coaching"
            description="1-on-1 live sessions"
            features={[
              "In-play strategies",
              "Odds spotting",
              "Weekly classes"
            ]}
            price="$99/session"
          />
        </Col>
      </Row>

      {/* CTA */}
    
    </div>
  );
};

export default ServicesPage;