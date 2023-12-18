import React from 'react'
import { Link } from 'react-router-dom'

const CardS = () => {
    return (
        <div className='m-5 border border-base-200 w-50 shadow-md'>
            <div className=' items-center flex flex-row px-10 '>
                <img src="src/assets/kedai.svg" alt="User Icon" className="py-10" />
                <h3 className='text-black ml-2 mr-20'>Faujiah Decika</h3>
                
                <h3 className='py-10 text-lime-500 text-left ml-auto'>Penyewaan Telas Selesai Dengan Yang Bersangkutan</h3>
                    <div className="lg:tooltip ml-2" data-tip="terakhir Diupdate Tanggal 13-Desember-2023">
                        <button >
                            <img src='src/assets/Tanya.svg' alt='' className='' />
                        </button>
                    </div>
                        <h3 className='py-10 text-right ml-2'>|</h3>
                        <h3 className='ml-2 font-bold text-lime-600'>Selesai</h3>
            </div>
                <div className="m-5 w-auto border border-black"></div>
                <div className='flex flex-grow border border-black m-4'>
                <img src='src/assets/Tempat.png' alt='Tempat' className='px-10 py-5' />
                <div className='flex flex-col ml-5 py-5'>
                    <ul>
                    <li className='font-bold mr-5 py-2'> Tema Coffe & Space</li>
                    <li className='font-bold mr-5 py-2 text-gray-400'> Faujiah Decika</li>
                    <li className='font-bold mr-5 py-2 text-gray-400'> 15 orang</li>
                    <li className='font-bold mr-5 py-2 text-gray-400'> 1 Hari</li>
                    <li className='font-bold mr-5 py-2 text-gray-400'> Jl. R.H Fisabilillah Sei Jang,
                        Kec. Bukit Bestari, Kota Tanjung Pinang, Kepulauan Riau, 29112</li>
                    </ul>
                    <div className='flex justify-end items-end gap-5'>
                        <p className='font-bold '>Rp. 500.000</p>
                    </div>
                    
                </div>
                </div>

            <div className='flex flex-col items-end justify-end'>
                <h3 className='px-20 py-5 font-bold'>Total Pembayaran Rp. 500.000</h3>
                
                <div className=' flex flex-row py-5 ml-5 px-10'>
                    <div className=' flex flex-row py-5 ml-5 px-10'>
                    <button className="btn ml-2 gap-5 font-semibold" onClick={()=>document.getElementById('my_modal_6').showModal()}>
                        <h1>Lihat Ulasan</h1>
                    </button>

                    <dialog id="my_modal_6" className="modal">
                        <div className="modal-box modal-bottom w-11/12 max-w-5xl py-10">
                            <form method="dialog ">
                                <button className="btn">
                                    <svg className="h-4 w-4 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="5" y1="12" x2="19" y2="12" />  <line x1="5" y1="12" x2="11" y2="18" />  <line x1="5" y1="12" x2="11" y2="6" /></svg>
                                </button>
                            </form>
                            <h2 className="py-4 text-Right text-2xl font-bold">Penilaian Costumer</h2>
    
                            <div className='w-auto h-auto flex flex-grow border border-black m-4'>
                                <img src='src/assets/Tempat.png' alt='Tempat' className='px-10 py-5' />
                            <div className='flex flex-col ml-5 py-5'>
                                <ul>
                                <li className='font-bold mr-5 py-2'> Tema Coffe & Space</li>
                                <li className='font-bold mr-5 py-2 text-gray-400'> Faujiah Decika</li>
                                <li className='font-bold mr-5 py-2 text-gray-400'> 15 orang</li>
                                <li className='font-bold mr-5 py-2 text-gray-400'> 1 Hari</li>
                                <li className='font-bold mr-5 py-2 text-gray-400'> Jl. R.H Fisabilillah Sei Jang,
                                    Kec. Bukit Bestari, Kota Tanjung Pinang, Kepulauan Riau, 29112</li>
                                </ul>
                                <div className='flex justify-end items-end gap-5 px-10'>
                                    <p className='font-bold '>Rp. 500.000</p>
                                </div>
                            </div>
                        </div>
                        <div className='border border-black py-5 m-4 w-auto h-auto flex flex-grow'>
                            <img src='src/assets/UserA.svg' alt='User' className='px-5 marker:' />
                            <div className='flex flex-col ml-5 py-5'>
                                <ul>
                                    <li className='font-bold mr-5 py-2 text-black'> Faujiah Decika</li>
                                </ul>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                                </div>
                                    <div className='flex flex-row flex-grow'>
                                        <h3 className='py-5 text-gray-400'>Sepadan Dengan Harga : </h3>
                                        <h3 className='py-5 ml-1'> Sesuai </h3>
                                    </div>
                            
                                    <div className='flex flex-row flex-grow'>
                                        <h3 className='py-5 text-gray-400'>Pelayanan Penyewaan : </h3>
                                        <h3 className='py-5 ml-1'> Bagus </h3>
                                    </div>
                                    <div className='flex flex-row flex-grow'>
                                    <h3 className='py-5 text-gray-400'>Ulasan: </h3>
                                    <h3 className='py-5 ml-1'>Tempat strategis tepi jalan, parkiran lumayan luas. Suasana nyaman, pelayanan baik,toilet bersih.Untuk Harga lumayan standart untuk cafe</h3>
                                    </div>

                            </div>  
                        </div>
                    </div>
                </dialog>

                        <button variant='success' onClick={() => window.open('https://wa.me/6281268327476','_blank')} className='btn ml-2 gap-5 font-semibold'>
                            Hubungi
                        </button>

                </div>
                
            </div>
        </div>   
        </div>
    )
}

export default CardS
