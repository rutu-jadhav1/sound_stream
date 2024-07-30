import React from 'react'
import { MdFavorite } from "react-icons/md";
import { MdSpaceDashboard } from "react-icons/md";
import { FaGripfire } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";

import './Sidebar.css'
import SideBarButtons from '../../SideBarButtons/SideBarButtons'

function Sidebar() {
  return (
    <div className='sidebar-container'>
      <img src='https://tse3.mm.bing.net/th?id=OIP.DlWJ6yUv6lbrC2fJMzX2MAHaEQ&pid=Api&P=0&h=180' className='profile-img' alt='profile-img'/>
      <div>
        <SideBarButtons title='Feed' to='/Feed' icon={<MdSpaceDashboard />} />
        <SideBarButtons title='Trending' to='/Trending' icon={<FaGripfire />}/>
        <SideBarButtons title='Player' to='/Player' icon={<FaPlay />}/>
        <SideBarButtons title='Favourites' to='/Favourites' icon={<MdFavorite />}/>
        <SideBarButtons title='Library' to='/Library' icon={<IoLibrary />}/>
      </div>
      <SideBarButtons  title='Sign Out' to='/' icon={<FaSignOutAlt />}/>
    </div>

  )
}

export default Sidebar