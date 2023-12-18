// ?kodingan  keamnana
import React from 'react'
import { Link } from 'react-router-dom'


const Keamanan = () => {
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
                <div>
                    <h1 className='py-5 font-bold'>Pengaturan Akun</h1>
                    <Link to="../">
                        <button className="text-black font-bold mb-2 bg-white p-4 w-full text-left">Informasi Akun</button>
                    </Link>
                    <div className="flex flex-col mt-3 text-left py-5">
                        <Link to='../Riwayatpesanan'>
                            <button className="font-bold w-full bg-white text-black px-3 py-5 mb-2 text-left">Riwayat Pesanan</button>
                        </Link>
                        <Link to='.../Keamanan'>
                            <button className="font-bold w-full bg-violet-950 text-white px-3 py-5 mb-2 text-left">Keamanan</button>  
                        </Link>
                        <Link to='../Bantuan'>
                            <button className="font-bold w-full bg-white text-black px-3 py-5 mb-2 text-left">Bantuan dan Dukungan</button>
                        </Link>
                        <Link to='../KeluarH'>
                            <button className="font-bold w-full bg-white text-black px-3 py-5 mb-2 text-left">Keluar dan Hapus Akun</button>
                        </Link>           
                    </div>
            </div>
        </div>

        {/* Sebelah Kanan */}
        <div className="flex-grow border-2 border-gray-300 rounded-md p-6 ml-6">
            {/* Informasi Akun */}
            <div className="mb-8">
            <p className="bg-violet-950 text-white flex flex-row border-violet-950 font-bold text-xl mb-4 p-5 w-300">Informasi Akun</p>
            <div className="mb-4">
                <p className='font-bold text-xl'>Login & Keamanan</p>

            <div>
                <button className="btn w-full border rounded-md p-2 text-black text-sm font-bold bg-white my-5 text-left flex justify-between" onClick={()=>document.getElementById('my_modal_4').showModal()}>
                    <p>Ubah Kata Sandi</p>
                    <svg className="h-5 w-5 text-black flex" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </button>
                    <dialog id="my_modal_4" className="modal">
                        <div className="modal-box modal-bottom sm:modal-middle">
                            <form method="dialog ">
                                <button classname="btn">
                                    <svg class="h-4 w-4 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="5" y1="12" x2="19" y2="12" />  <line x1="5" y1="12" x2="11" y2="18" />  <line x1="5" y1="12" x2="11" y2="6" /></svg>
                                </button>
                            </form>
                                <p className="py-4 text-center"> Silakan Masukan kata sandi anda saat ini dan kata sandi baru anda</p>

                            <div className="modal-action flex justify-center items-center">
                                <div>
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text">Masukkan Kata Sandi Saat ini</span>
                                        </div>
                                    <input type="password" placeholder="password" className="input input-bordered w-full max-w-xs" />

                                <div className="label">
                                    <span className="label-text">Masukkan Kata Sandi Baru</span>
                                </div>
                                    <input type="password" placeholder="password" className="input input-bordered w-full max-w-xs" />

                                <div className="label">
                                    <span className="label-text">Konfirmasikan Kata Sandi Baru</span>
                                </div>
                                    <input type="password" placeholder="password" className="input input-bordered w-full max-w-xs" />
                                <form method="dialog ">
                                    {/* if there is a button, it will close the modal */}
                                    <button className="btn btn-xs flex w-full max-w-xs lg:btn-lg my-5 bg-violet-950 text-white"> Simpan </button>
                                    <button className="btn btn-xs flex  w-full max-w-xs lg:btn-lg my-5"> Batal </button>
                                </form>
                            </label>
                        </div>
                    </div>
                </div>
                </dialog>
            </div>

            <div>
                <button className="btn w-full border rounded-md p-2 text-black text-sm font-bold bg-white my-5 text-left flex justify-between" onClick={()=>document.getElementById('my_modal_5').showModal()}>
                    <p>Email</p>
                    <svg className="h-5 w-5 text-black flex" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                    </svg>
                </button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Ubah Email</h3>
                            <div className="modal-action flex justify-center items-center">
                                <label className="form-control w-full max-w-xs">
                            <div className="label ">
                                <span className="label-text">Masukkan Email Baru</span>
                            </div>
                                <input type="email" placeholder="Email@" className="input input-bordered w-full max-w-xs" />
                                    <form method="dialog ">
                                        {/* if there is a button, it will close the modal */}
                                        <button className="btn btn-xs flex w-full max-w-xs lg:btn-lg my-5 bg-violet-950 text-white"> Simpan </button>
                                        <button className="btn btn-xs flex  w-full max-w-xs lg:btn-lg my-5"> Batal </button>
                                    </form>
                                </label>
                            </div>
                        </div>
                    </dialog>
                </div>
                
            <div>
                <button className="btn w-full border rounded-md p-2 text-black text-sm font-bold bg-white my-5 text-left flex justify-between" onClick={()=>document.getElementById('my_modal_6').showModal()}>
                    <p>No.Telephone</p>
                    <svg className="h-5 w-5 text-black flex" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
                    <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Ubah No.Telephone</h3>
                            <div className="modal-action flex justify-center items-center">
                                <label className="form-control w-full max-w-xs">
                            <div className="label ">
                                <span className="label-text">Masukkan No Telephone baru</span>
                            </div>
                                <input type="number" placeholder="+62" className="input input-bordered w-full max-w-xs" />
                                    <form method="dialog ">
                                        {/* if there is a button, it will close the modal */}
                                        <button className="btn btn-xs flex w-full max-w-xs lg:btn-lg my-5 bg-violet-950 text-white"> Simpan </button>
                                        <button className="btn btn-xs flex  w-full max-w-xs lg:btn-lg my-5"> Batal </button>
                                    </form>
                                </label>
                            </div>
                        </div>
                    </dialog>
                </div>

            <div>
                <button className="btn w-full border rounded-md p-2 text-black text-sm font-bold bg-white my-5 text-left flex justify-between" onClick={()=>document.getElementById('my_modal_7').showModal()}>
                <p>Akun Yang Terhubung</p>
                    <svg className="h-5 w-5 text-black flex" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </button>
                    <dialog id="my_modal_7" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <form method="dialog ">
                                <button classname="btn">
                                    <svg class="h-4 w-4 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="5" y1="12" x2="19" y2="12" />  <line x1="5" y1="12" x2="11" y2="18" />  <line x1="5" y1="12" x2="11" y2="6" /></svg>
                                </button>
                            </form>
                                <p className="py-4">Hubungkan Akun Dengan Sosial Media Anda</p>
                                    <div className="w-full border rounded-md p-2 my-5 flex flex-grow justify-center">
                                        <img src = "src/assets/fcbk.svg"/>
                                        <p className="text center flex ml-2 flex-grow" >Hubungkan Akun Facebook</p>
                                        <p className="text-blue-600"> Hubungkan</p>
                                    </div>

                                    <div className="w-full border rounded-md p-2 my-5 flex flex-grow justify-center">
                                        <img src = "src/assets/IG.svg"/>
                                        <p className="text center flex ml-2 flex-grow" >Hubungkan Akun  Instagram</p>
                                        <p className="text-blue-600"> Hubungkan</p>
                                    </div>

                                    <div className="w-full border rounded-md p-2 my-5 flex flex-grow justify-center">
                                        <img src = "src/assets/Tweet.svg"/>
                                        <p className="text center flex ml-2 flex-grow" >Hubungkan Akun Twitter</p>
                                        <p className="text-blue-600"> Hubungkan</p>
                                    </div>

                                    <div className="w-full border rounded-md p-2 my-5 flex flex-grow justify-center">
                                        <img src = "src/assets/google.svg"/>
                                        <p className="text center flex ml-2 flex-grow" >Hubungkan Akun Google</p>
                                        <p className="text-blue-600"> Hubungkan </p>
                                    </div>

                            
                                    <div className="modal-action justify-center item-center py-5">
                                        <form method="dialog ">
                                        {/* if there is a button, it will close the modal */}
                                            <button className="btn btn-xs flex w-full max-w-xs lg:btn-lg my-5 bg-violet-950 text-white py-5"> Simpan </button>
                                            <button className="btn btn-xs flex  w-full max-w-xs lg:btn-lg my-5 py-5"> Batal </button>
                                    </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
          </div>
        </div>
      </div>
    </div>
    
    )
}

export default Keamanan
