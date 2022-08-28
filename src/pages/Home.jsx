import React from 'react'

import { HomeContainer } from '@/containers'

const Home = () => {
  const handleInput = e => {
    console.log(e.target.value)
  }

  return <HomeContainer />
}

export default Home
