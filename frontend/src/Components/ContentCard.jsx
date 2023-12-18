import React from 'react';
import { Link } from 'react-router-dom';

const ContentCard = ({ cards }) => {
  return (
    <>
    <div className="container mx-auto p-4">
    <div className="grid grid-cols-2 gap-5">
      <div className="bg-white p-4 border shadow-md text-black rounded-lg">
        <img
          src='../src/assets/tema.jpg'
          alt="Tema Coffe and Space"
          className="w-full h-96 object-cover mb-2 rounded"
        />
        <h2 className="text-xl mt-1 mb-2 font-bold ml-3">Tema Coffee and Space</h2>
        <div className="flex justify-left items-center space-x-1 mt-5 ml-3">
                        <img src='../src/assets/star.png' alt="stars" className="w-5 h-5"></img>
                        <img src='../src/assets/star.png' alt="stars" className="w-5 h-5"></img>
                        <img src='../src/assets/star.png' alt="stars" className="w-5 h-5"></img>
                        <img src='../src/assets/star.png' alt="stars" className="w-5 h-5"></img>
                        <img src='../src/assets/star.png' alt="stars" className="w-5 h-5"></img>
                        <div className="justify-end text-gray-500">
                            <p>Tanjungpinang, Kepulauan Riau</p>
                        </div>
                        </div>
        <p className="text-black-700 mt-5 ml-3 ">5/5 (1.5K Review)</p>
        <div className="flex items-center justify-content mb-3 mt-20 ml-4">
          <p className="text-lg text-red-600 font-bold">Rp.500.000</p>
          <div>
            <Link to="/edittema" className="bg-blue-700 text-white px-7 py-5 rounded mr-30 ml-20 font-bold">Edit</Link>
            <Link to="/Detailtema" className="bg-blue-900 text-white px-7 py-5 rounded mr-10 ml-4 font-bold">
              Detail
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 border shadow-md text-black rounded-lg">
        <img
          src='../src/assets/ck.jpg'
          alt="CK Covention Centre"
          className="w-full h-96 object-cover mb-2 rounded"
        />
        <h2 className="text-xl mt-1 mb-2 font-bold ml-3">CK Convention Center</h2>
        <div className="flex justify-left items-center space-x-1 mt-5 ml-3">
                        <img src='../src/assets/star.png' alt="stars" className="w-5 h-5"></img>
                        <img src='../src/assets/star.png' alt="stars" className="w-5 h-5"></img>
                        <img src='../src/assets/star.png' alt="stars" className="w-5 h-5"></img>
                        <img src='../src/assets/star.png' alt="stars" className="w-5 h-5"></img>
                        <img src='../src/assets/star.png' alt="stars" className="w-5 h-5"></img>
                        <div className=" justify-end text-gray-500">
                            <p>Tanjungpinang, Kepulauan Riau</p>
                        </div>
                        </div>
        <p className="text-black-700 mt-5 ml-3 ">5/5 (3.5K Review)</p>
        <div className="flex items-center justify-content mb-3 mt-20 ml-4">
          <p className="text-lg text-red-600 font-bold">Rp.359.000</p>
          <div>
            <Link to="/editck" className="bg-blue-700 text-white px-7 py-5 rounded mr-30 ml-20 font-bold">Edit</Link>
            <Link to="/Detailck" className="bg-blue-900 text-white px-7 py-5 rounded mr-10 ml-4 font-bold">
              Detail
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 border shadow-md text-black rounded-lg">
        <img
          src='../src/assets/aston.jpg'
          alt="Hotel Aston"
          className="w-full h-96 object-cover mb-2 rounded"
        />
        <h2 className="text-xl mt-1 mb-2 font-bold ml-3">Hotel Aston</h2>
        <div className="flex justify-left items-center space-x-1 mt-5 ml-3">
                        <img src='../src/assets/star.png' alt="stars" className="w-5 h-5"></img>
                        <img src='../src/assets/star.png' alt="stars" className="w-5 h-5"></img>
                        <img src='../src/assets/star.png' alt="stars" className="w-5 h-5"></img>
                        <img src='../src/assets/star.png' alt="stars" className="w-5 h-5"></img>
                        <img src='../src/assets/star.png' alt="stars" className="w-5 h-5"></img>
                        <div className=" justify-end text-gray-500">
                            <p>Tanjungpinang, Kepulauan Riau</p>
                        </div>
                        </div>
        <p className="text-black-700 mt-5 ml-3">5/5 (1.5K Review)</p>
        <div className="flex items-center justify-content mb-3 mt-20 ml-4">
          <p className="text-lg text-red-600 font-bold">Rp.279.000</p>
          <div>
          <Link to="/editaston" className="bg-blue-700 text-white px-7 py-5 rounded mr-30 ml-20 font-bold">Edit</Link>
            <Link to="/Detailaston" className="bg-blue-900 text-white px-7 py-5 rounded mr-10 ml-4 font-bold">
              Detail
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 border shadow-md text-black rounded-lg">
        <img
          src='../src/assets/rawit.jpg'
          alt="The Rawit"
          className="w-full h-96 object-cover mb-2 rounded"
        />
        <h2 className="text-xl mt-1 mb-2 font-bold ml-3">The Rawit</h2>
        <div className="flex justify-left items-center space-x-1 mt-5 ml-3">
                        <img src='../src/assets/star.png' alt="stars" className="w-5 h-5"></img>
                        <img src='../src/assets/star.png' alt="stars" className="w-5 h-5"></img>
                        <img src='../src/assets/star.png' alt="stars" className="w-5 h-5"></img>
                        <img src='../src/assets/star.png' alt="stars" className="w-5 h-5"></img>
                        <img src='../src/assets/star.png' alt="stars" className="w-5 h-5"></img>
                        <div className=" justify-end text-gray-500">
                            <p>Tanjungpinang, Kepulauan Riau</p>
                        </div>
                        </div>
        <p className="text-black-700 mt-5 ml-3 ">5/5 (1.5K Review)</p>
        <div className="flex items-center justify-content mb-3 mt-20 ml-4">
          <p className="text-lg text-red-600 font-bold">Rp.189.000</p>
          <div>
          <Link to="/editrawit" className="bg-blue-700 text-white px-7 py-5 rounded mr-30 ml-20 font-bold">Edit</Link>
            <Link to="/Detailrawit" className="bg-blue-900 text-white px-7 py-5 rounded mr-10 ml-4 font-bold">
              Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default ContentCard;
