import React from 'react'
import { Link } from 'react-router-dom'



const NavbarP = () => {
  return (
    <nav className="bg-violet-950 p-4 flex items-center justify-between">
        <div className="text-white flex items-center">
        <button className='bg-white rounded p-2'>
          <div className='text-black px-18 w-5 h-18'>
            <Link to='../'>
              <img src='src/assets/ep_back.svg'></img>
            </Link>
          </div>
        </button>
      </div>

      <div className="text-white">Riwayat Pesanan</div>
      
      <div></div> 
    </nav> 
  )
}

export default NavbarP