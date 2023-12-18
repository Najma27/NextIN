import React from "react";
import ContentCard from "../Components/ContentCard";
import { Link } from 'react-router-dom';

const Properti = () => {
  return (
    <>
      <div>
        <div className="flex items-center justify-between bg-blue-900 px-8 py-4 mb-10">
        <img
              src='../src/assets/logomassive.png'
              alt="logo"
              className="w-30 h-20"
            ></img>
            <h1 className="text-4xl font-bold text-white tex-align-center ml-19 ">Properti</h1>
          <div className="flex justify-end items-center space-x-1 mt-3 ml-5">
          <Link to="/">
              <img
                src='../src/assets/account.png'
                alt="akun"
                className="w-12 h-12 cursor-pointer"
              ></img>
            </Link>
          </div>
        </div>
        <div className="container mx-auto p-4">
          <h1 className="text-2xl mb-4 font-bold border-b-2 border-black">Rekomendasi Tempat</h1>
          <Link to="/tambahkan" className="bg-blue-900 text-white px-4 py-2 rounded">+ Tambahkan</Link>
        </div>
        <ContentCard />
      </div>
    </>
  );
};

export default Properti;
