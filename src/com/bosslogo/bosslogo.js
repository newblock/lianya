import React from 'react'
import logoImg from './me-act.png'
import './bosslogo.css'

class BossLogo extends React.Component
{
  render()
  {
    return(
      <div className="bosslogo-container">
        <img src={logoImg} alt="" width="150" height="150"/>
      </div>
    )
  }
}

export default BossLogo
