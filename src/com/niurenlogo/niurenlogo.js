import React from 'react'
import logoImg from './niuren-act.png'
import './niurenlogo.css'

class NiurenLogo extends React.Component
{
  render()
  {
    return(
      <div className="niurenlogo-container">
        <img src={logoImg} alt="" width="150" height="150"/>
      </div>
    )
  }
}

export default NiurenLogo
