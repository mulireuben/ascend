import React from 'react';
import { Row, Col, Typography, Divider, Button, Input } from 'antd';
import { MailOutlined, PhoneOutlined, SafetyCertificateOutlined } from '@ant-design/icons';
import { FaFacebookF, FaInstagram, FaTelegramPlane,FaWhatsapp } from 'react-icons/fa';

const { Title, Text, Link } = Typography;

const FooterWidget = () => {
  return (
    <div className="footer-widget-area" style={{ background: '#1a1a1a', color: '#fff', padding: '60px 0' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Row gutter={[40, 30]}>
          {/* Column 1: Quick Links */}
          <Col xs={24} sm={12} md={6}>
            <Title level={5} className="footer-title" style={{ color: '#fff', fontSize: '18px', marginBottom: '20px', fontWeight: '600' }}>Quick Links</Title>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><Link href="/about" style={{ color: '#bfbfbf' }}>About Us</Link></li>
              <li><Link href="/how-it-works" style={{ color: '#bfbfbf' }}>How It Works</Link></li>
              <li><Link href="/odds-guide" style={{ color: '#bfbfbf' }}>Odds Guide</Link></li>
              <li><Link href="/blog" style={{ color: '#bfbfbf' }}>Betting Tips</Link></li>
              <li><Link href="/contact" style={{ color: '#bfbfbf' }}>Contact</Link></li>
            </ul>
          </Col>

          {/* Column 2: Support */}
          <Col xs={24} sm={12} md={6}>
            <Title level={5} className="footer-title" style={{ color: '#fff', fontSize: '18px', marginBottom: '20px', fontWeight: '600' }}>Support</Title>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><Link href="/faq" style={{ color: '#bfbfbf' }}>FAQ</Link></li>
              <li><Link href="/live-chat" style={{ color: '#bfbfbf' }}><PhoneOutlined /> Live Chat</Link></li>
              <li><Link href="/terms" style={{ color: '#bfbfbf' }}>Terms of Service</Link></li>
              <li><Link href="/privacy" style={{ color: '#bfbfbf' }}>Privacy Policy</Link></li>
              <li><Link href="/responsible-gambling" style={{ color: '#bfbfbf' }}>Responsible Gambling</Link></li>
            </ul>
          </Col>

          {/* Column 3: Newsletter */}
          <Col xs={24} sm={12} md={6}>
            <Title level={5} className="footer-title" style={{ color: '#fff', fontSize: '18px', marginBottom: '20px', fontWeight: '600' }}>Stay Updated</Title>
            <Text style={{ color: '#bfbfbf' }}>Get exclusive betting tips and offers:</Text>
            <div style={{ marginTop: '15px' }}>
              {/* <Input 
                placeholder="Your email" 
                suffix={<MailOutlined />}
                style={{ marginBottom: '10px', backgroundColor: '#333', color: '#fff', borderColor: '#444' }}
              /> */}
              <Button type="primary" block>Join my channel</Button>
            </div>
          </Col>

          {/* Column 4: Contact & Trust */}
          <Col xs={24} sm={12} md={6}>
            <Title level={5} className="footer-title" style={{ color: '#fff', fontSize: '18px', marginBottom: '20px', fontWeight: '600' }}>Contact Us</Title>
            <div>
              <p style={{ color: '#bfbfbf' }}><FaWhatsapp /> +1 (555) 123</p>
              <p style={{ color: '#bfbfbf' }}><FaTelegramPlane /> reach via telegram</p>
              
              <Divider style={{ borderColor: '#444' }} />
              
              <Title level={5} className="footer-title" style={{ color: '#fff', fontSize: '18px', marginBottom: '20px', fontWeight: '600' }}>We Accept</Title>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <img src="/visa.png" alt="Visa" width="40" />
                <img src="/mastercard.png" alt="Mastercard" width="40" />
                <img src="/paypal.png" alt="PayPal" width="40" />
                <img src="/bitcoin.png" alt="Bitcoin" width="40" />
              </div>
              
              <div style={{ marginTop: '15px', display: 'flex', alignItems: 'center' }}>
                <SafetyCertificateOutlined style={{ color: '#52c41a', marginRight: '8px' }} />
                <Text style={{ color: '#bfbfbf' }}>Licensed & Regulated</Text>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FooterWidget;