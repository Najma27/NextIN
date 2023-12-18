import React from "react";
import { Link } from "react-router-dom";

const Detailrawit = () => {
    return (
        <div>
            <div className="flex items-center justify-between bg-blue-900 px-8 py-4 mb-10">
            <img
              src='../src/assets/logomassive.png'
              alt="logo"
              className="w-30 h-20 "
            ></img>
                <h1 className="text-4xl font-bold text-white text-align-center ml-20">Properti</h1>
                <div className="flex justify-end items-center space-x-1 mt-5 ml-3">
                        <img src='../src/assets/account.png' alt="sakun" className="w-12 h-12"></img>
      </div>
            </div>
            <button className="bg-blue-900 text-white py-2 px-4 rounded mb-10 ml-9">
                <Link to="/properti">Kembali</Link>
            </button>
            <div className="container mx-auto px-8">
                <div className="flex flex-wrap ">
                    <div className="w-full">
                        <img src="/src/assets/rawit.jpg" alt="rawit" className="w-full h-96 object-cover mb-2  " />
                        <div className="container mx-auto px-12">
                            <ul className="flex justify-center items-center gap-10 py-6 text-md font-semibold">
                                <a href='#'>Deskripsi</a>
                                <a href='#'>Lokasi</a>
                                <a href='#'>Kalender Ketesediaan</a>
                                <a href='#'>Harga</a>
                                <a href='#'>Persyaratan & Aturan</a>
                                <a href='#'>Kontak</a>
                            </ul>
                            <hr className="bg-gray-300 h-[3px] mb-3"/>
                        </div>
                        <div className="container mx-auto pt-3 px-12">
                        <p className="border-2 border-gray-300 w-[60px] rounded-sm text-center font-semibold text-sm py-1 mb-2">Cafe</p>
                        <h1 className="text-3xl font-bold text-gray-900 mt-5 mb-5">The Rawit</h1>
                        <div className="flex justify-left items-center space-x-1">
                        <img src='../src/assets/star.png' alt="stars" className="w-5 h-5"></img>
                        <img src='../src/assets/star.png' alt="stars" className="w-5 h-5"></img>
                        <img src='../src/assets/star.png' alt="stars" className="w-5 h-5"></img>
                        <img src='../src/assets/star.png' alt="stars" className="w-5 h-5"></img>
                        <img src='../src/assets/star.png' alt="stars" className="w-5 h-5"></img>
                        <div className=" justify-end text-gray-500">
                            <p>Tanjungpinang, Kepulauan Riau</p>
                        </div>
                        </div>
                        <p className="text-black-700 mt-5 ">5/5 (105 Review)</p>
                        <p className="text-red-600 mt-3 mb-5">Rp.189,000</p>
                        <hr className="bg-gray-300 h-[3px] mb-3"/>
                        <div className="w-1/2">
                        <p className="text-2xl font-bold text-gray-900 mt-3 mb-3">Lokasi</p>
                        <p className="text-black-600 mb-1 ml-20">Jl.R.H Fisabilillah Sei Jang</p>
                        <p className="text-black-600 mb-1 ml-20">Kec. Bukit Bestari</p>
                        <p className="text-black-600 mb-1 ml-20">Kota Tanjung Pinang</p>
                        <p className="text-black-600 mb-1 ml-20">Kepulauan Riau</p>
                        <p className="text-black-600 mb-1 ml-20">29112</p>
                        <p className="text-black-600 mt-7 ml-20">11.00 - 23.00 (Setiap Hari)</p>
                        </div>
                        <div className="ml-20 mt-3">
                        <img
          src='../src/assets/map.png'
          alt="map"
        />
                        </div>
                        </div>
                        <div className="container mx-auto px-12 mt-3 mb-5">
                            <hr className="bg-gray-300 h-[3px] mb-3"/>
                            <h1 className="text-2xl font-bold text-gray-900 mb-6">Kalender Ketersediaan</h1>
                            <img
          src='../src/assets/calendar.png'
          alt="calendar"
          className="flex justify-center items-center mb-2 rounded"
        />
                        </div>
                        <div className="container mx-auto px-12 mt-3 mb-5">
                            <hr className="bg-gray-300 h-[3px] mb-3"/>
                            <h1 className="text-2xl font-bold text-gray-900 mb-6">Persyaratan dan Aturan</h1>
                            <ul className="list-decimal pl-4 mb-6">
                                <li>Dapat digunakan untuk acara event seperti ulang tahun, rapat santai, acara kumpul keluarga, dll.</li>
                                <li>Dilarang membawa makanan dan minuman dari luar</li>
                                <li>Tidak membuat keributan di tempat.</li>
                                <li>Jika telah melakukan penyewaan tempat dan melakukan pembayaran awal terjadi pembatalan menggunakan tempat uang hanya dikembalikan setengahnya saja.</li>
                            </ul>
                        </div>
                        <div className="container mx-auto px-12 mt-3 mb-5">
                            <hr className="bg-gray-300 h-[3px] mb-3"/>
                            <h1 className="text-2xl font-bold text-gray-900 mb-6">Kontak</h1>
                            <div className="flex flex-col gap-3 mb-6">
                                <div className="flex justify-start items-center">
                                <img src='../src/assets/instagram.png' alt="ig" className="w-5 h-5"></img>
                                <p className="text-md font-semibold mb-1 text-gray-900">the.rawit</p> 
                                </div>
                                <div className="flex justify-start tems-center">
                                <img src='../src/assets/telephone-handle-silhouette.png' alt="hp" className="w-5 h-5"></img>
                                <p className="text-md font-semibold mb-1 text-gray-900">0812-2221-1212</p>
                                </div>
                            </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Detailrawit;
