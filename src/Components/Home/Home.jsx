import React from 'react'
import { useSelector } from 'react-redux'
import './home.css'

import RightComponent from '../RightComponent/RightComponent'
import LeftComponent from '../LeftComponent/LeftComponent'

const Home = () => {
  const clients = useSelector(state => state.clients)
  return (
    <div className={`home-container`}>
      <LeftComponent list = {clients.list} />
      <RightComponent list = {clients.list} />
    </div>
  )
}

export default Home
