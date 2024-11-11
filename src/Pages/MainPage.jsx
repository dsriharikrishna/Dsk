import React, { useState } from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import WomanCollections from '../components/WomanCollections'
import Footer from '../components/Footer'
import Feteching from '../components/Feteching'
import { Gents, Ladies } from '../data'

const MainPage = () => {
  const [gentsFashion, setGentsFashion] = useState(Gents)
  const [ladiesFashion, setLadiesFashion] = useState(Ladies)

  return (
    <div>
        <Header />
        <Feteching/>
        <Banner />
        <Collections gentsFashion={gentsFashion} />
        <WomanCollections ladiesFashion={ladiesFashion} />
        <Footer />
    </div>
  )
}

export default MainPage
