import React from 'react'
import Hero from '../home/Hero'
import RecentWinningTickets from '../home/Recent'
import SocialProofSection from '../home/clientWins'
import PreviousWinsShowcase from '../home/previouswin'
import FlashOffersCarousel from '../home/onoffer'

const AppHome = () => {
  return (
    <div>
        <Hero/>
        <RecentWinningTickets/>
        <FlashOffersCarousel/>
        <SocialProofSection/>
        <PreviousWinsShowcase/>
    </div>
  )
}

export default AppHome