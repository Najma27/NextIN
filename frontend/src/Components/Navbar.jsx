import React from 'react';


const Navbar = () => {
  return (
    <nav className="bg-violet-950 p-4 flex justify-between items-center">
    
      <div className="flex items-center">
        <div className="w-25 h-10 bg-white mr-4">
        
        </div>
        <img src='src/assets/Logo.png'></img>
        <span className="text-white text-lg font-semibold">Placify</span>

      </div>

      
      <div className="flex items-center">
        <ul className="flex space-x-4">
          <Link to="/Beranda">
            <li className="text-white">Beranda</li>
          </Link>
          <Link to="/Properti">
            <li className="text-white">Properti</li>
          </Link>
          <Link to="/CekPesanan">
            <li className="text-white">Cek Pesanan</li>
          </Link>
          
        </ul>

        {/* Icons */}
        <div className="flex items-center space-x-4 ml-4">
          
          <div className="bg-purple-700 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer">
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
