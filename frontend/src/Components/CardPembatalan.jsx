import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CardPembatalan = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [cancellationStatus, setCancellationStatus] = useState('Dibatalkan');

    const handleCancelConfirmation = () => {
        setIsModalVisible(true);
    };

    const handleConfirmation = (accepted) => {
        setIsModalVisible(false);
        if (accepted) {
        setCancellationStatus('Diterima');
        } else {
        setCancellationStatus('Ditolak');
        }
    };

    return (
        <div className='m-5 border border-base-200 w-50 shadow-md'>
            <div className='items-center flex flex-row px-10 '>
                <img src="src/assets/kedai.svg" alt="User Icon" className="py-10" />
                    <h3 className='text-black ml-2 mr-20 gap-56'>Faujiah Decika</h3>

              
                <h3 className='py-10 text-lime-500 text-left ml-auto'>Penyewaan Telah Dibatalkan Oleh Yang Bersangkutan</h3>

                    <div className="lg:tooltip ml-2" data-tip="terakhir Diupdate Tanggal 15-Desember-2023">
                            <button>
                        <img src='src/assets/Tanya.svg' alt='' className='' />
                            </button>
                    </div>

                <h3 className='py-10 text-right ml-2'>|</h3>
                
                <button className={cancellationStatus === 'Diterima' ? 'text-green-500' : 'text-red-500'} onClick={() => setIsModalVisible(true)}>
                    {cancellationStatus}
                </button>
            </div>

        {/* Modal */}
            {isModalVisible && (
                <div className='fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center'>
                    <div className='bg-white p-5 rounded-md'>
                        <h3 className='font-bold text-lg'>Hello!</h3>
                        <p className='py-4'>Apakah Anda Setujui Pembatalan Penyewaan Tempat Tersebut</p>
                        <div className='modal-action justify-center flex flex-row gap-5 py-5'>
                            <button
                                className='btn py-5 gap-5 ml-5 w-100' onClick={() => handleConfirmation(true)}> Iya </button>
                            <button className='btn py-5 gap-5 ml-5 w-50' onClick={() => handleConfirmation(false)}>Tidak</button>
                        </div>
                    </div>
                </div>
            )}

            <div className='m-5 w-auto border border-black'></div>
                <div className='flex flex-grow border border-black m-4'>
                    <img src='src/assets/Tempat.png' alt='Tempat' className='px-10 py-5' />
                    <div className='flex flex-col ml-5 py-5'>
                        <ul>
                            <li className='font-bold mr-5 py-2'> Tema Coffe & Space</li>
                            <li className='font-bold mr-5 py-2 text-gray-400'> Faujiah Decika</li>
                            <li className='font-bold mr-5 py-2 text-gray-400'> 15 orang</li>
                            <li className='font-bold mr-5 py-2 text-gray-400'> 1 Hari</li>
                            <li className='font-bold mr-5 py-2 text-gray-400'>
                            Jl. R.H Fisabilillah Sei Jang,
                            Kec. Bukit Bestari, Kota Tanjung Pinang, Kepulauan Riau, 29112
                            </li>
                        </ul>
                        <div className='flex justify-end items-end gap-5'>
                            <p className='font-bold '>Rp. 500.000</p>
                        </div>
                    </div>
                </div>

                    <div className='flex flex-col items-end justify-end'>
                        <h3 className='px-20 py-5 font-bold'>Total Pembayaran Rp. 500.000</h3>

                        <div className='flex flex-row py-5 ml-5 px-10'>
                        <Link to='../TampilkamPembatalanPesanan'>
                            <button className='btn ml-2 gap-5 font-semibold bg-orange-500 text-white'>Tampilkan Pembatalan Penyewaan</button>
                        </Link>

       
                            <button variant='success' onClick={() => window.open('https://wa.me/6281268327476','_blank')} className='btn ml-2 gap-5 font-semibold'>Hubungi</button>
                      
                    </div>
            </div>
        </div>
    );
};

export default CardPembatalan;
