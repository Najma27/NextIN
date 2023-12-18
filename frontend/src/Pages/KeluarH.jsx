// kodingan Keluar dan Hapus Akun
import React from 'react'
import { Link } from 'react-router-dom'


const KeluarH = () => {
  return (
    <div className="flex h-pull bg-gray-100">
      {/* Sebelah Kiri */}
      <div className="flex-none w-1/3 bg-zinc-200 p-6">
        {/* Icon Gambar User dan Tulisan */}
        <div className="flex items-center mb-4">
          <img src="src/assets/image 7.svg" alt="User Icon" className="w-12 h-12 mr-4" />
          <div className='space-x-3'>
            <p className="text-black font-bold text-l text-center space-x-3">Boy William</p>
            <p className="text-black">boy.william@example.com</p>
            <p className='text-gray-500 text-center'>Co-founder</p>
          </div>
        </div>

        {/* Menu Informasi Akun */}
        <div className=' justify-start'>
          <h1 className='py-5 font-bold'>Pengaturan Akun</h1>
          <Link to='../'>
            <div className="text-black font-bold mb-2 bg-white p-4 w-full">Informasi Akun</div>
          </Link>
          <div className="flex flex-col mt-3 text-left py-5">
            <Link to='../RiwayatPesanan'>
              <button className=" bg-white text-black px-3 py-5 mb-2 w-full text-left font-bold">Riwayat Pesanan</button>
            </Link>
            <Link to='../Keamanan'>
              <button className=" bg-white text-black px-3 py-5 mb-2 w-full text-left font-bold">Keamanan</button>
            </Link>
            <Link to='../Bantuan'>
              <button className=" bg-white text-black px-3 py-5 mb-2 w-full text-left font-bold">Bantuan dan Dukungan</button>
            </Link>
            <Link to='../KeluarH'>
              <button className=" bg-violet-950 text-white px-3 py-5 mb-2 w-full text-left font-bold">Keluar dan Hapus Akun</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Sebelah Kanan */}
      <div className="mb-8 flex-grow border-2 border-gray-300 rounded-md p-6 ml-6">
        {/* Informasi Akun */}
          <p className="bg-violet-950 text-white flex flex-row border-violet-950 font-bold text-xl mb-4 p-5 w-300">Keluar dan Hapus Akun</p>
          <div className="mb-4 justify-center flex py-20">
            <div className="card w-96 bg-white text-primary-content justify-center items-center shadow-none">
              <div className="card-body">
                <h2 className="card-title text-black">Hallo!</h2>
                <p className='text-black'>Mohon perhatikan bahwa setelah akun anda dihapus, anda tidak dapat memulihkannya kembali.</p>
                <div className="card-actions bg-white flex flex-row justify-center my-5">
                  <button className="btn btn-xs text-black max-w-xs lg:btn-lg m-2">Kembali</button>
                  <button className="btn btn-xs text-red-700 max-w-xs lg:btn-lg m-2">OK</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default KeluarH
