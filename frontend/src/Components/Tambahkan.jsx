import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Tambahkan = () => {
  const [property, setProperty] = useState({
    name: '',
    theme: '',
    location: '',
    price: '',
    rules: '',
    contact: '',
    image: null,
    availabilityDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProperty((prev) => ({ ...prev, image: file }));
  };

  const handleCalendarChange = (e) => {
    setProperty((prev) => ({ ...prev, availabilityDate: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = 'http://localhost:8081/api/tambahkan';

      const formData = new FormData();
      formData.append('name', property.name);
      formData.append('theme', property.theme);
      formData.append('location', property.location);
      formData.append('price', property.price);
      formData.append('rules', property.rules);
      formData.append('contact', property.contact);
      formData.append('image', property.image);
      formData.append('availabilityDate', property.availabilityDate);

      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Data berhasil disimpan ke server.');
      } else {
        console.error('Gagal menyimpan data ke server.');
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error.message);
    }
  };

  return (
    <div >
      <div className="flex items-center justify-between bg-blue-900 px-8 py-4 mb-10">
        <img
          src='../src/assets/logomassive.png'
          alt="logo"
          className="w-30 h-20"
        ></img>
        <h1 className="text-4xl font-bold text-white tex-align-center ml-20">Properti</h1>
        <div className="flex justify-end items-center space-x-1 mt-3 ml-5">
          <img src="../src/assets/account.png" alt="account" className="w-12 h-12" />
        </div>
      </div>
      <button className="bg-blue-900 text-white py-2 px-4 rounded mb-10 ml-9">
        <Link to="/properti">Kembali</Link>
      </button>
      <div className="container mx-auto px-12 mt-3 mb-5">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col mb-5">
            <label htmlFor="name" className="text-black-900 text-lg font-bold mb-1">
              Nama Tempat
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={property.name}
              onChange={handleChange}
              placeholder="Tambahkan nama tempat"
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>
          <hr className="bg-gray-300 h-[3px] mb-5 w-full" />

          <div className="flex flex-col mb-5">
            <label htmlFor="theme" className="text-black-900 text-lg font-bold mb-1">
              Foto/Gambar
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>
          <hr className="bg-gray-300 h-[3px] mb-5 w-full" />

          <div className="flex flex-col mb-5">
            <label htmlFor="location" className="text-black-900 text-lg font-bold mb-1">
              Lokasi
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={property.location}
              onChange={handleChange}
              placeholder="Tambahkan Lokasi"
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>
          <hr className="bg-gray-300 h-[3px] mb-5 w-full" />

          <div className="container mx-auto px-12 mt-3 mb-5">
            <h1 className="text-black-900 text-lg font-bold mb-2">Kalender Ketersediaan</h1>
            <input
              type="date"
              onChange={handleCalendarChange}
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>
          <hr className="bg-gray-300 h-[3px] mb-5 w-full" />

          <div className="flex flex-col mb-5">
            <label htmlFor="theme" className="text-black-900 text-lg font-bold mb-1">
              Harga
            </label>
            <input
              type="text"
              id="price"
              name="price"
              value={property.price}
              onChange={handleChange}
              placeholder="Tambahkan Harga"
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>
          <hr className="bg-gray-300 h-[3px] mb-5 "/>

          <div className="flex flex-col mb-5">
            <label htmlFor="rules" className="text-black-900 text-lg font-bold mb-1">
              Persyaratan dan Aturan
            </label>
            <input
              type="text"
              id="rules"
              name="rules"
              value={property.rules}
              onChange={handleChange}
              placeholder="Tambahkan Persyaratan dan Aturan"
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>
          <hr className="bg-gray-300 h-[3px] mb-5 w-full" />

          <div className="flex flex-col mb-5">
            <label htmlFor="contact" className="text-black-900 text-lg font-bold mb-1">
              Kontak
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={property.contact}
              onChange={handleChange}
              placeholder="Tambahkan Kontak dan Social Media"
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-900 text-white py-2 px-4 rounded mb-10 ml-9 "
          >
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export default Tambahkan;
