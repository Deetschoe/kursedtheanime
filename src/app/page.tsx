'use client'

import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    window.location.href = 'https://minimalmaru.com'
  }, [])

  return null
}

export default Home
