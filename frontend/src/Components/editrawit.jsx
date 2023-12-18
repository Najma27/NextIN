import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const editrawit = () => {
  const [property, setProperty] = useState({
    name: '',
    location: '',
    price: '',
    rules: [],
    contact: {
      instagram: '',
      phoneNumber: '',
    },
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/api/editrawit')
      .then((response) => response.json())
      .then((data) => setProperty(data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty((prev) => ({ ...prev, [name]: value }));
  };

  const handleRulesChange = (e, index) => {
    const newRules = [...property.rules];
    newRules[index] = e.target.value;
    setProperty((prev) => ({ ...prev, rules: newRules }));
  };

  const handleContactChange = (e, contactField) => {
    setProperty((prev) => ({
      ...prev,
      contact: { ...prev.contact, [contactField]: e.target.value },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = 'http://localhost:8081/api/editrawit'; 

      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(property),
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
    <div>
      <div className="flex items-center justify-between bg-blue-900 px-8 py-4 mb-10">
        <img src='../src/assets/logomassive.png' alt="logo" className="w-30 h-20"></img>
        <h1 className="text-4xl font-bold text-white tex-align-center ml-20">Properti</h1>
        <div className="flex justify-end items-center space-x-1 mt-3 ml-5">
          <img src="../src/assets/account.png" alt="akun" className="w-12 h-12" />
        </div>
      </div>
      <button className="bg-blue-900 text-white py-2 px-4 rounded mb-10 ml-9">
        <Link to="/properti">Kembali</Link>
      </button>
      <div className="flex flex-col items-center">
        <img src="../src/assets/rawit.jpg" alt="tema" className="w-96 h-96 rounded-lg mb-5" />
        <button className="bg-blue-900 text-white py-2 px-4 rounded mb-10 ml-9">Ubah foto</button>
      </div>
      <div className="container mx-auto px-12 mt-3 mb-5">
        <form onSubmit={handleSubmit} className="w-full">
          <label htmlFor="name" className="text-black-900 text-sm font-bold ml-4">Nama Tempat</label>
          <input
            type="text"
            id="name"
            name="name"
            value={property.name}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded w-full"
          />
          <hr className="bg-gray-300 h-[3px] mb-3" />

          <label htmlFor="location" className="text-black-900 text-sm font-bold ml-4">Lokasi</label>
          <input
            type="text"
            id="location"
            name="location"
            value={property.location}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded w-full"
          />
          
          <hr className="bg-gray-300 h-[3px] mb-3" />

          <label htmlFor="price" className="text-black-900 text-sm font-bold ml-4">Harga</label>
          <input
            type="text"
            id="price"
            name="price"
            value={property.price}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded w-full"
          />
          <hr className="bg-gray-300 h-[3px] mb-3" />

          <label htmlFor="rules" className="text-black-900 text-sm font-bold ml-4">Persyaratan dan Aturan</label>
          {property.rules.map((rule, index) => (
            <div key={index}>
              <input
                type="text"
                value={rule}
                onChange={(e) => handleRulesChange(e, index)}
                className="border border-gray-300 p-2 rounded w-full"
              />
              <br />
            </div>
          ))}
          <button
            type="button"
            onClick={() => setProperty((prev) => ({ ...prev, rules: [...prev.rules, ''] }))}
            className="text-blue-900 underline mt-2"
          >
            Tambahkan Aturan
          </button>
          <hr className="bg-gray-300 h-[3px] mb-3" />

          <label htmlFor="instagram" className="text-black-900 text-sm font-bold ml-4">Instagram</label>
          <input
            type="text"
            id="instagram"
            name="instagram"
            value={property.contact.instagram}
            onChange={(e) => handleContactChange(e, 'instagram')}
            className="border border-gray-300 p-2 rounded w-full"
          />
          <hr className="bg-gray-300 h-[3px] mb-3" />

          <label htmlFor="phoneNumber" className="text-black-900 text-sm font-bold ml-4">No Telepon</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={property.contact.phoneNumber}
            onChange={(e) => handleContactChange(e, 'phoneNumber')}
            className="border border-gray-300 p-2 rounded w-full"
          />
          <hr className="bg-gray-300 h-[3px] mb-3" />

          <button type="submit" className="bg-blue-900 text-white py-2 px-4 rounded mb-10 ml-9">
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export default editrawit;
