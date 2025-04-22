import { Button, Card } from 'antd'
import React from 'react'
import heroimage from "../../assets/heroimage.jpg"

const Hero = () => {
  return (
<div>
  <Card
    style={{ 
      width: "100%", 
      position: 'relative',
      overflow: 'hidden' // Ensures content doesn't spill outside the card
    }}
    cover={
      <img
        alt="example"
        src={heroimage}
        style={{ 
          width: '100%', 
          height: '500px', 
          objectFit: 'cover',
          position: 'relative' // Needed for z-index stacking
        }} 
      />
    }
  >
    <div 
      className="info-overlay" 
      style={{
        position: 'absolute',
        top: '20px',       // Distance from top
        left: '20px',      // Distance from left
        maxWidth: '50%',
        maxHeight:"100%",   // Prevents text from spanning full width
        padding: '50px 50px',
        background: 'rgba(0, 0, 0, 0.6)', // Semi-transparent dark background
        color: 'white',
        borderRadius: '4px',
        // zIndex: 1          // Ensures text appears above image
      }}
    >
      <h1 style={{ margin: 0, fontSize: '18px' }}>"Win First, Pay Later – Only Book Tickets for Guaranteed Sure Bets</h1>
      <p style={{ margin: '8px 0 0', fontSize: '14px' }}>
      Access expert-vetted odds. You pay ONLY after cashing out winnings."*
      </p>
      <Button type='primary'>Browse todays sure bets</Button>
    </div>

  </Card>
</div>
  )
}

export default Hero