import React from 'react'
import './Home.css'
import Sidebar from '../../components/Sidebar/SideBar/Sidebar'

function Home() {
  return (
    <div className='main-body'>
      <Sidebar/>
      {/* <div className='main-div'>
      <Link to='/trending' className='sub-div'>Trending</Link>
      <Link to='/library' className='sub-div'>Library</Link>
      <Link to='/feed' className='sub-div'>Feed</Link>
      <Link to='/favourites'className='sub-div'>Favourites</Link>
      <Link to='/player'className='sub-div'>Player</Link>
      </div> */}
      
    </div>
  )
}

export default Home