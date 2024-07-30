import React from 'react'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons/lib'

import './SideBarButtons.css'

function SideBarButtons(props) {
  return (
    <>
    <Link to={props.to}>
      <div className='btn-body'>
        <IconContext.Provider value={{size: '24px', className:"btn-icon"}}>
        {props.icon}
        </IconContext.Provider>
        <p className='btn-title'>{props.title}</p>
      </div>
    </Link>
    </>
    
  )
}

export default SideBarButtons