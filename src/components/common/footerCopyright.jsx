import React from 'react';
import { Typography, Divider } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, SafetyCertificateOutlined } from '@ant-design/icons';

const { Text, Link } = Typography;

const FooterCopyright = () => {
  return (
    <div className="footer-copyright" style={{ background: '#000', color: '#8c8c8c', padding: '20px 0', textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Text type="secondary">
          © {new Date().getFullYear()} YourBettingSite. All rights reserved. | 
          <Link href="/terms" style={{ margin: '0 8px', color: '#8c8c8c' }}>Terms</Link> | 
          <Link href="/privacy" style={{ margin: '0 8px', color: '#8c8c8c' }}>Privacy</Link>
        </Text>
        <Divider style={{ margin: '10px 0', borderColor: '#444' }} />
        <Text type="secondary" style={{ fontSize: '12px' }}>
          <SafetyCertificateOutlined /> 18+ Only. Gambling can be addictive. Play responsibly. | 
          Licensed by the Gaming Authority (#12345)
        </Text>
        <div style={{ marginTop: '15px' }}>
          <Link href="#" style={{ color: '#8c8c8c' }}><FacebookOutlined style={{ fontSize: '20px', margin: '0 8px' }} /></Link>
          <Link href="#" style={{ color: '#8c8c8c' }}><TwitterOutlined style={{ fontSize: '20px', margin: '0 8px' }} /></Link>
          <Link href="#" style={{ color: '#8c8c8c' }}><InstagramOutlined style={{ fontSize: '20px', margin: '0 8px' }} /></Link>
        </div>
      </div>
    </div>
  );
};

export default FooterCopyright;