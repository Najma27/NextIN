import React from 'react'
import { Link } from 'react-router-dom'

const CardP = () => {
  return (
    <div className='m-5 border border-base-200 w-50 shadow-md'>
            <div className=' items-center flex flex-row px-10 '>
                <img src="src/assets/kedai.svg" alt="User Icon" className="py-10" />
                <h3 className='text-black ml-2 mr-20'>Faujiah Decika</h3>
                    
                
                
                
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
 
                        <button variant='success' onClick={() => window.open('https://wa.me/6281268327476','_blank')} className='btn ml-2 gap-5 font-semibold'>
                            Hubungi
                        </button>

                </div>
            </div>
        </div>
  )
}

export default CardP
