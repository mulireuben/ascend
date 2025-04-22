import { Card, Row, Col, Typography } from 'antd';
const { Title } = Typography;

const RecentWinningTickets = () => {
  const winningTickets = [
    {
      id: 1,
      match: "Premier League - Arsenal vs Chelsea",
      amount: 2400,
      odds: 3.5,
      date: "15/06/2023",
      image: "/ticket1.jpg"
    },
    {
      id: 2,
      match: "NBA Finals - Lakers vs Celtics",
      amount: 1750,
      odds: 2.8,
      date: "10/06/2023",
      image: "/ticket2.jpg"
    },
    {
      id: 3,
      match: "UCL Final - Man City vs Inter",
      amount: 3200,
      odds: 4.2,
      date: "05/06/2023",
      image: "/ticket3.jpg"
    }
  ];

  return (
    <div style={{ margin: '40px 0', padding: '0 24px' }}>
      {/* Centered Heading */}
      <Title 
        level={2} 
        style={{ 
          textAlign: 'center',
          marginBottom: '30px',
          color: '#1a1a1a'
        }}
      >
        Our Recent Winning Tickets
      </Title>

      {/* Responsive 3-column grid using AntD Row/Col */}
      <Row 
        gutter={[24, 24]} 
        justify="center"
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        {winningTickets.map(ticket => (
          <Col 
            key={ticket.id}
            xs={24}   // Full width on mobile
            sm={12}    // 2 columns on tablet
            md={8}     // 3 columns on desktop
            lg={8}
          >
            <Card
              hoverable
              cover={
                <img
                  alt={ticket.match}
                  src={ticket.image}
                  style={{ 
                    height: '180px',
                    objectFit: 'cover'
                  }}
                />
              }
              style={{
                height: '100%',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
              bodyStyle={{ padding: '16px' }}
            >
              <h3 style={{ margin: 0 }}>{ticket.match}</h3>
              <p style={{ 
                color: '#52c41a', 
                fontWeight: 'bold',
                margin: '8px 0'
              }}>
                Won: ${ticket.amount.toLocaleString()}
              </p>
              <p style={{ margin: 0 }}>
                Odds: {ticket.odds} • Booked on: {ticket.date}
              </p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default RecentWinningTickets;