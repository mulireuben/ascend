import React, { useState } from 'react';
import { 
  Row, Col, Typography, Card, Tag, Button, Tabs, Avatar, Divider, Steps 
} from 'antd';
import { 
  SearchOutlined, DollarOutlined, 
  FireOutlined, TrophyOutlined, CheckCircleOutlined 
} from '@ant-design/icons';

const { Title, Text } = Typography;
const { TabPane } = Tabs;
const { Step } = Steps;

const WinsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Sample data
  const wins = [
    {
      id: 1,
      sport: 'football',
      user: 'Mike T.',
      amount: 3200,
      odds: 3.5,
      proof: '/win1.jpg',
      match: 'Arsenal 3-1 Chelsea',
      date: '2023-06-15'
    },
    // Add 10+ more wins...
  ];

  const filteredWins = activeFilter === 'all' 
    ? wins 
    : wins.filter(win => win.sport === activeFilter);

  return (
    <div className="wins-page" style={{ maxWidth: 1200, margin: '0 auto', padding: 24 }}>
      {/* Hero Section */}
      <section style={{ textAlign: 'center', marginBottom: 48 }}>
        <Title level={2} style={{ fontSize: 36 }}>
          <FireOutlined /> 4,312 Winning Tickets Paid Out Last Month
        </Title>
        <Text type="secondary" style={{ fontSize: 18 }}>
          Join $1.2M+ in verified winnings
        </Text>
        
        <Row gutter={16} justify="center" style={{ marginTop: 24 }}>
          <Col><StatCard value="97%" label="Win Rate" /></Col>
          <Col><StatCard value="8.2" label="Avg. Odds" /></Col>
          <Col><StatCard value="24min" label="Avg. Payout" /></Col>
        </Row>
      </section>

      {/* Live Ticker */}
      {/* <LiveTicker /> */}

      {/* Filterable Gallery */}
      <Tabs 
        activeKey={activeFilter}
        onChange={setActiveFilter}
        tabBarStyle={{ marginBottom: 24 }}
      >
        <TabPane tab="All Wins" key="all" />
        <TabPane tab="Football" key="football" />
        {/* <TabPane tab="Basketball" key="basketball" /> */}
        <TabPane tab="Parlays" key="parlay" />
        <TabPane tab="High Odds (5.0+)" key="high-odds" />
      </Tabs>

      <Row gutter={[24, 24]}>
        {filteredWins.map(win => (
          <Col xs={24} sm={12} md={8} key={win.id}>
            <WinCard {...win} />
          </Col>
        ))}
      </Row>

      {/* Testimonials */}
      {/* <TestimonialSection /> */}

      {/* How It Works */}
      {/* <StepsSection /> */}

      {/* Final CTA */}
      {/* <CTASection /> */}
    </div>
  );
};

// Component Building Blocks
const StatCard = ({ value, label }) => (
  <Card bordered={false} style={{ width: 120 }}>
    <Title level={3} style={{ margin: 0 }}>{value}</Title>
    <Text type="secondary">{label}</Text>
  </Card>
);

const WinCard = ({ user, amount, odds, proof, match, date }) => (
  <Card
    hoverable
    cover={<img alt={user} src={proof} style={{ height: 160, objectFit: 'cover' }} />}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <Text strong>${amount.toLocaleString()}</Text>
        <br />
        <Text type="secondary">Odds: {odds}</Text>
      </div>
      <Tag color="green">
        <TrophyOutlined /> Winner
      </Tag>
    </div>
    <Divider style={{ margin: '12px 0' }} />
    <Text>{match}</Text>
    <br />
    <Text type="secondary">{date}</Text>
  </Card>
);

export default WinsPage;