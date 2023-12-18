// Kodingan Bantuan
import React from 'react'
import { Link } from 'react-router-dom'

const Bantuan = () => {
  return (
        <div>
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
                        <Link to='../'>
                            <button className="text-black font-bold mb-2 bg-white p-4 py-5 w-full text-left ">Informasi Akun</button>
                        </Link>
                    <div className="flex flex-col mt-3 text-left py-5">
                        <Link to='../RiwayatPesanan'>
                            <button className="bg-white w-full font-bold text-black px-3 py-5 mb-2 text-left">Riwayat Pesanan</button>
                        </Link>
                        <Link to='../Keamanan'>
                            <button className="bg-white w-full font-bold text-black px-3 py-5 mb-2 text-left">Keamanan</button>
                        </Link>
                        <Link to='../Bantuan'>
                            <button className="bg-violet-950 w-full font-bold text-white px-5 py-5 mb-2 text-left">Bantuan dan Dukungan</button> 
                        </Link>
                        <Link to='../KeluarH'>
                            <button className="bg-white w-full font-bold text-black px-3 py-5 mb-2 text-left">Keluar dan Hapus Akun</button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Sebelah Kanan */}
            <div className="flex-grow border-2 border-gray-300 rounded-md p-6 ml-6">
                {/* Informasi Akun */}
                <div className="mb-8">
                    <p className="bg-violet-950 text-white flex flex-row border-violet-950 font-bold text-xl mb-4 p-5 w-300">Pusat Bantuan dan Dukungan</p>
                        <div className="mb-4">
                            <p className='font-bold text-xl'>Referensi Akun</p>

                        <div>
                            <button className="btn w-full border rounded-md p-2 text-black text-sm font-bold bg-white my-5 text-left flex justify-between" onClick={()=>document.getElementById('my_modal_4').showModal()}>
                                <p>Mengapa Saya Tidak Bisa Login Ke Akun Saya?</p>
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
                        
                                            <p className="py-4 text-center"> MENGAPA SAYA TIDAK BISA LOGIN KE AKUN SAYA?</p>
                                
                                <div className="modal-action flex justify-center items-center">
                                    <div className="py-2 gap-2 mx-auto ml-8 ">
                                        <h2 className="text-center py-2 ">Anda Dapat Mengikuti cara berikut ini</h2>
                                        <ol className="list-decimal text-left">
                                                <li className="py-2 mb-2 ">Periksa Kembali apakah anda telah memasukkan sandi dengan benar</li>
                                                <li className="py-2 mb-2 ">Periksa kembali apakah anda sudah memasukan no.telepon yang terdaftar dengan benar</li>
                                        </ol>
                                                <h3 className='py-5 text-center'>Apakah cara ini berguna?</h3>
                                        <form className="flex items-center flex-row" method="dialog">
                                                  {/* Jika ada tombol, ini akan menutup modal */}
                                                <button className="btn btn-xs flex-1 max-w-xs lg:btn-lg m-2 text-white">
                                                        <svg class="h-10 w-10 text-blue-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
                                                        </svg>
                                                    <h3 className='text-black'>Ya</h3>
                                                </button>
                                                <button className="btn btn-xs flex-1 max-w-xs lg:btn-lg m-2">
                                                        <svg class="h-10 w-10 text-blue-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"/>
                                                        </svg>
                                                    <h3>Tidak</h3>
                                                </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </dialog>
                </div>

                <div>
                    <button className="btn w-full border rounded-md p-2 text-black text-sm font-bold bg-white my-5 text-left flex justify-between" onClick={()=>document.getElementById('my_modal_5').showModal()}>
                        <h1>Bagaimana mengubah/memperbaharui no.telephone saya</h1>
                            <svg className="h-5 w-5 text-black flex" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="9 18 15 12 9 6" />
                            </svg>
                    </button>

                    <dialog id="my_modal_5" className="modal">
                        <div className="modal-box modal-bottom sm:modal-middle">
                            <form method="dialog ">
                                <button classname="btn">
                                    <svg class="h-4 w-4 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="5" y1="12" x2="19" y2="12" />  <line x1="5" y1="12" x2="11" y2="18" />  <line x1="5" y1="12" x2="11" y2="6" /></svg>
                                </button>
                            </form>
                            <h2 className="py-4 text-center font-bold">BAGAIMANA CARA MENGUBAH/MEMPERBARUI NO.TELEPHONE SAYA?</h2>
                                
                                <div className="modal-action flex justify-center items-center">
                                    <div className="py-2 gap-2 mx-auto ml-8 ">
                                        <h2 className="text-center py-2 font-semibold">Anda Dapat Mengubah/Memperbarui n.telephone anda yang terdaftar dengan cara berikut:</h2>
                                            <ol className="list-decimal text-left">
                                                    <li className="py-2 mb-2 ">Pilih icon profil</li>
                                                    <li className="py-2 mb-2 ">Klik menu kemanan</li>
                                                    <li className='py-2 mb-2'>Pilih menu ubah no.telephone</li>
                                                    <li className='py-2 mb-2'>Masukkan no.telephone baru Anda</li>
                                                    <li className='py-2 mb-2'>Pilih simpan</li>
                                            </ol>
                                        <h3 className='py-5 text-center'>Apakah cara ini berguna?</h3>
                                            <form className="flex items-center flex-row" method="dialog">
                                                    {/* Jika ada tombol, ini akan menutup modal */}
                                                <button className="btn btn-xs flex-1 max-w-xs lg:btn-lg m-2 text-white">
                                                    <svg class="h-10 w-10 text-blue-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
                                                    </svg>
                                                        <h3 className='text-black font-bold'>Ya</h3>
                                                    </button>
                                                <button className="btn btn-xs flex-1 max-w-xs lg:btn-lg m-2">
                                                    <svg class="h-10 w-10 text-blue-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"/>
                                                    </svg>
                                                        <h3 className='font-bold'>Tidak</h3>
                                                </button>
                                            </form>
                                </div>
                            </div>
                        </div>
                    </dialog>
                </div>
                    
                <div>
                    <button className="btn w-full border rounded-md p-2 text-black text-sm font-bold bg-white my-5 text-left flex justify-between" onClick={()=>document.getElementById('my_modal_6').showModal()}>
                        <h1>Bagaimana Cara Menjaga keamanan Akun Saya</h1>
                            <svg className="h-5 w-5 text-black flex" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="9 18 15 12 9 6" />
                            </svg>
                    </button>

                    <dialog id="my_modal_6" className="modal">
                        <div className="modal-box modal-bottom sm:modal-middle">
                            <form method="dialog ">
                                <button classname="btn">
                                    <svg class="h-4 w-4 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="5" y1="12" x2="19" y2="12" />  <line x1="5" y1="12" x2="11" y2="18" />  <line x1="5" y1="12" x2="11" y2="6" /></svg>
                                </button>
                            </form>
                            <h2 className="py-4 text-center font-bold">BAGAIMANA CARA MENJAGA KEAMANAN AKUN SAYA?</h2>
                                
                                <div className="modal-action flex justify-center items-center">
                                    <div className="py-2 gap-2 mx-auto ml-8 ">
                                        <h2 className="text-center py-2 font-semibold">Untuk menjaga keamanan akun placify anda,Lindungi informasi pribadi anda dengan bertransaksi denganaman dengan mengikuti panduan berikut:</h2>
                                            <ol className="list-decimal text-left font-bold my-5">
                                                    <li className="py-2 mb-2">Jangan pernah membagi kata sandi akun Anda kepada siapapun</li>
                                                    <li className="py-2 mb-2">gunakan kata sandi yang kuat</li>
                                                    <li className='py-2 mb-2'>Perbarui informasi akun anda</li>
                                            </ol>
                                        <h3 className='py-5 text-center'>Apakah cara ini berguna?</h3>
                                            <form className="flex items-center flex-row" method="dialog">
                                                    {/* Jika ada tombol, ini akan menutup modal */}
                                                <button className="btn btn-xs flex-1 max-w-xs lg:btn-lg m-2 text-white">
                                                    <svg class="h-10 w-10 text-blue-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
                                                    </svg>
                                                        <h3 className='text-black font-bold'>Ya</h3>
                                                    </button>
                                                <button className="btn btn-xs flex-1 max-w-xs lg:btn-lg m-2">
                                                    <svg class="h-10 w-10 text-blue-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"/>
                                                    </svg>
                                                        <h3 className='font-bold'>Tidak</h3>
                                                </button>
                                            </form>
                                </div>
                            </div>
                        </div>
                    </dialog>
                </div>
    
                <div>
                    <button className="btn w-full border rounded-md p-2 text-black text-sm font-bold bg-white my-5 text-left flex justify-between" onClick={()=>document.getElementById('my_modal_7').showModal()}>
                        <h1>Bagaimana Cara Menghapus Akun Saya</h1>
                            <svg className="h-5 w-5 text-black flex" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="9 18 15 12 9 6" />
                            </svg>
                    </button>

                    <dialog id="my_modal_7" className="modal">
                        <div className="modal-box modal-bottom sm:modal-middle">
                            <form method="dialog ">
                                <button classname="btn">
                                    <svg class="h-4 w-4 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="5" y1="12" x2="19" y2="12" />  <line x1="5" y1="12" x2="11" y2="18" />  <line x1="5" y1="12" x2="11" y2="6" /></svg>
                                </button>
                            </form>
                            <h2 className="py-4 text-center font-bold">BAGAIMANA CARA MENGHAPUS AKUN SAYA?</h2>
                                
                                <div className="modal-action flex justify-center items-center">
                                    <div className="py-2 gap-2 mx-auto ml-8 ">
                                        <h2 className="text-center py-2 font-semibold">Anda dapat menghapus akun dengan cara sebagai berikut:</h2>
                                            <ol className="list-decimal text-left my-5">
                                                    <li className="py-2 mb-2">Pilih Icon Profil</li>
                                                    <li className="py-2 mb-2">pilih menu Keluar dan Hapus Akun</li>
                                                    <li className='py-2 mb-2'>Pilih OK</li>
                                                    <li className='py-2 mb-2'>Akan Diverifikasi Melalui Email Anda</li>
                                                    <li className='py-2 mb-2'>Isi Alasan penghapusan Akun</li>
                                            </ol>
                                        <h3 className='py-5 text-center'>Apakah cara ini berguna?</h3>
                                            <form className="flex items-center flex-row" method="dialog">
                                                    {/* Jika ada tombol, ini akan menutup modal */}
                                                <button className="btn btn-xs flex-1 max-w-xs lg:btn-lg m-2 text-white">
                                                    <svg class="h-10 w-10 text-blue-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
                                                    </svg>
                                                        <h3 className='text-black font-bold'>Ya</h3>
                                                    </button>
                                                <button className="btn btn-xs flex-1 max-w-xs lg:btn-lg m-2">
                                                    <svg class="h-10 w-10 text-blue-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"/>
                                                    </svg>
                                                        <h3 className='font-bold'>Tidak</h3>
                                                </button>
                                            </form>
                                </div>
                            </div>
                        </div>
                    </dialog>
                </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bantuan
