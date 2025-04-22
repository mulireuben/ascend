import React from 'react';
import { Card, Row, Col, Typography, Button, Divider, QRCode, Space } from 'antd';
import { WhatsAppOutlined, MessageOutlined } from '@ant-design/icons';
// import { FaTelegramPlane } from '@ant-design/icons/lib/icons';
import { FaFacebookF, FaInstagram, FaTelegramPlane } from 'react-icons/fa';


const { Title, Text } = Typography;

const ChatMePage = () => {
  // Replace with your actual contact info
  const telegramUsername = 'YourTelegramUsername';
  const whatsappNumber = '1234567890';
  const contactEmail = 'support@yourbetsite.com';

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '24px' }}>
      {/* Header */}
      <Title level={2} style={{ textAlign: 'center', marginBottom: 8 }}>
        <MessageOutlined /> Chat With Us
      </Title>
      <Text type="secondary" style={{ display: 'block', textAlign: 'center', marginBottom: 40 }}>
        Get instant help via your preferred messaging app
      </Text>

      {/* Main Cards */}
      <Row gutter={[24, 24]} justify="center">
        {/* Telegram Card */}
        <Col xs={24} sm={12}>
          <Card
            hoverable
            style={{ height: '100%', borderRadius: 12 }}
            cover={
              <div style={{ background: '#0088cc', padding: '20px', textAlign: 'center' }}>
                <FaTelegramPlane style={{ fontSize: 64, color: 'white' }} />
              </div>
            }
          >
            <Title level={4} style={{ textAlign: 'center' }}>Telegram</Title>
            <Text style={{ display: 'block', textAlign: 'center', marginBottom: 24 }}>
              Fastest response time (typically under 5 minutes)
            </Text>
            
            <Space direction="vertical" align="center" style={{ width: '100%' }}>
              <QRCode 
                value={`https://t.me/${telegramUsername}`} 
                size={160}
                icon="/telegram-icon.png" // Optional: Add small logo in center
              />
              <Button 
                type="primary" 
                size="large"
                icon={<FaTelegramPlane />}
                href={`https://t.me/${telegramUsername}`}
                target="_blank"
                style={{ 
                  background: '#0088cc',
                  width: '100%',
                  maxWidth: 240,
                  marginTop: 16
                }}
              >
                Open Telegram
              </Button>
              <Text type="secondary">@{telegramUsername}</Text>
            </Space>
          </Card>
        </Col>

        {/* WhatsApp Card */}
        <Col xs={24} sm={12}>
          <Card
            hoverable
            style={{ height: '100%', borderRadius: 12 }}
            cover={
              <div style={{ background: '#25D366', padding: '20px', textAlign: 'center' }}>
                <WhatsAppOutlined style={{ fontSize: 64, color: 'white' }} />
              </div>
            }
          >
            <Title level={4} style={{ textAlign: 'center' }}>WhatsApp</Title>
            <Text style={{ display: 'block', textAlign: 'center', marginBottom: 24 }}>
              24/7 support with read receipts
            </Text>
            
            <Space direction="vertical" align="center" style={{ width: '100%' }}>
              <QRCode 
                value={`https://wa.me/${whatsappNumber}`}
                size={160}
                color='#25D366'
                icon="/whatsapp-icon.png" // Optional
              />
              <Button 
                type="primary" 
                size="large"
                icon={<WhatsAppOutlined />}
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                style={{ 
                  background: '#25D366',
                  width: '100%',
                  maxWidth: 240,
                  marginTop: 16
                }}
              >
                Chat on WhatsApp
              </Button>
              <Text type="secondary">+{whatsappNumber}</Text>
            </Space>
          </Card>
        </Col>
      </Row>

      {/* Fallback Option */}
      <Divider>OR</Divider>
      
      <Card style={{ textAlign: 'center', marginTop: 24 }}>
        <Title level={4}>Prefer Email?</Title>
        <Text style={{ fontSize: 16 }}>
          Send us a message at: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </Text>
        <Text type="secondary" style={{ display: 'block', marginTop: 8 }}>
          (Response within 24 hours)
        </Text>
      </Card>

      {/* Response Times Info */}
      <Card style={{ marginTop: 24 }}>
        <Title level={5} style={{ textAlign: 'center' }}>Our Average Response Times</Title>
        <Row gutter={16} style={{ textAlign: 'center', marginTop: 16 }}>
          <Col span={8}>
            <Title level={3} style={{ color: '#0088cc' }}>5 mins</Title>
            <Text>Telegram</Text>
          </Col>
          <Col span={8}>
            <Title level={3} style={{ color: '#25D366' }}>15 mins</Title>
            <Text>WhatsApp</Text>
          </Col>
          <Col span={8}>
            <Title level={3}>24 hours</Title>
            <Text>Email</Text>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ChatMePage;