// Kodingan Profulpage

import React from 'react'
import { Link } from 'react-router-dom'



const Profilpage = () => {
  return (
    <div className="flex h-pull bg-gray-100">
      {/* Sebelah Kiri */}
      <div className="flex-none w-1/3 bg-zinc-200 p-6">
        {/* Icon Gambar User dan Tulisan */}
        <div className="flex items-center mb-4">
          <img
            src="src/assets/image 7.svg"
            alt="User Icon"
            className="w-12 h-12 mr-4"
          />
          <div className='space-x-3'>
            <p className="text-black font-bold text-l text-center space-x-3">Boy William</p>
            <p className="text-black">boy.william@example.com</p>
            <p className='text-gray-500 text-center'>Co-founder</p>
          </div>
        </div>

        {/* Menu Informasi Akun */}
        <div>
          <p className='py-5 font-bold'> Pengaturan Akun</p>
            <Link to='../'>
                  <p className="text-white font-bold mb-2 bg-violet-950 p-4 py-5 text-left">Informasi Akun</p>
            </Link>
          <div className="flex flex-col mt-3 text-left py-5">
            <Link to='../RiwayatPesanan'>
                <button className="font-bold bg-white text-black px-3 w-full py-5 mb-2 text-left">Riwayat Pesanan</button>
            </Link>

            <Link to='../Keamanan'>
              <button className="font-bold bg-white text-black w-full px-3 py-5 mb-2 text-left">Keamanan</button>
            </Link>
          
            <Link to='../Bantuan'>
              <button className="font-bold bg-white text-black w-full px-3 py-5 mb-2 text-left">Bantuan dan Dukungan</button>
            </Link>

            <Link to='../KeluarH'>
                <button className="font-bold bg-white text-black w-full px-3 py-5 mb-5 text-left">Keluar dan Hapus Akun</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Sebelah Kanan */}
      <div className="flex-grow border-2 border-gray-300 rounded-md p-6 ml-6 h-pull">
        {/* Informasi Akun */}
        <div className="mb-8">
          <p className="bg-violet-950 text-white font-bold text-xl mb-4 p-5">Informasi Akun</p>
          <div className="mb-8 flex items-start justify-center">
            <p className="font-bold text-xl p-5"> User Detail</p>

            <div className='ml-20 flex-grow'>
              <label className="block text-gray-700 text-sm font-bold mb-2 py-5 gap-5">
                Nama
              </label>
              <input type="text" className="w-full border rounded-md p-2 py-5" placeholder="Masukkan Nama" />
              <label className="block text-gray-700 text-sm font-bold mb-2 py-5">
                Email
              </label>
              <input type="text" className=" w-full border rounded-md p-2 py-5" placeholder="Masukkan Email" />
              <label className="block text-gray-700 text-sm font-bold mb-2 py-5">
                Pekerjaan
              </label>
              <input type="text" className="w-full border rounded-md p-2 py-5" placeholder="Masukkan Pekerjaan" />
              <label className="block text-gray-700 text-sm font-bold mb-2 py-5">
                No Handphone
              </label>
              <input type="text" className="w-full border rounded-md p-2 py-5" placeholder="Masukkan Hanphone" />
            </div>
          </div>

          <div className="mt-4">
            <div className='flex items-center flex-grow'>
              <p className="text-black font-semibold ">Password</p>
              <div className='ml-20 flex-grow '>
                <p className="text-black text-sm ml-20 ">
                  Setel Ulang Kata sandi.Kami akan mengirimkan anda tautan ke email anda untuk mengatur ulang kata sandi
                </p>
              </div>
            </div>


            <div className='flex justify-center my-5'>
            <button className="btn justify-center items-center bg-teal-300" onClick={() => document.getElementById('my_modal_1').showModal()}>Reset Password</button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Halo</h3>
                <p className="py-4">Untuk Keamanan akun mohon verifikasi identitas kamu dengan salah satu cara dibawah ini</p>
                <div className='w-[250px] h-[90px] bg-white border border-black flex items-center justify-center flex-row mx-auto my-auto'>
                  <a href="#" className="items-center">
                    <img src='src/assets/email.svg' className='item-center' alt="Email Icon"></img>
                  </a>
                  <p className='text-center ml-2'>Verifikasi dengan Email</p>
                </div>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn" onClick={() => document.getElementById('my_modal_1').close()}>Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
          </div>
                    
          <div className="mt-4">
            <div className='flex items-center flex-grow'>
              <p className="text-black font-bold mb-2">Terhubung dengan</p>
            </div>
            <div className='flex flex-col'>
              <div className="flex items-center ml-60 mb-5">
                <a href="#" className="text-blue-500">
                  <img src='src/assets/Google.svg' alt="Google Icon" className="w-8 h-8" />
                </a>
                <div className="ml-2">
                  <p className="text-black">Google</p>
                </div>
              </div>
              <div className="flex items-center ml-60 my-5">
                <a href="#" className="text-blue-500">
                  <img src='src/assets/fcbk.svg' alt="Facebook Icon" className="w-8 h-8" />
                </a>
                <div className="ml-2">
                  <p className="text-black">Facebook</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Profilpage