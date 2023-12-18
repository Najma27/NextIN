import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Menus = () => {
  const [activeTab, setActiveTab] = useState('Semua');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='m-5 bg-white flex flex-row justify-between py-5 p-10 gap-5 shadow-md'>
      <Link to='../RiwayatPesanan'>
        <button
          className={`text-black ${activeTab === 'Semua' && 'font-bold'}`}
          onClick={() => handleTabClick('Semua')}
        >
          Semua
        </button>
      </Link>

      <Link to='../BelumDibayar'>
        <button
          className={`text-black ${activeTab === 'BelumDibayar' && 'font-bold'}`}
          onClick={() => handleTabClick('BelumDibayar')}
        >
          Belum Dibayar
        </button>
      </Link>

      <Link to='../Penyewaan'>
        <button
          className={`text-black ${activeTab === 'Penyewaan' && 'font-bold'}`}
          onClick={() => handleTabClick('Penyewaan')}
        >
          Penyewaan
        </button>
      </Link>

      <Link to='../Pselesai'>
        <button
          className={`text-black ${activeTab === 'Selesai' && 'font-bold'}`}
          onClick={() => handleTabClick('Selesai')}
        >
          Selesai
        </button>
      </Link>

      <Link to='../Pembatalan'>
        <button
          className={`text-black ${activeTab === 'Pembatalan' && 'font-bold'}`}
          onClick={() => handleTabClick('Pembatalan')}
        >
          Pembatalan
        </button>
      </Link>
    </div>
  );
}

export default Menus;
