import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div>
      홈 입니다. 
      <button onClick={()=>{navigate('/dex')}}>포켓몬 도감 시작하기</button>
    </div>
  )
}

export default Home
