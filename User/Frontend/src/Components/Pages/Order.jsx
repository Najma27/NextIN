import React, { useState } from 'react'
import Navbar from '../Elements/NavbarLog'
import Desc from '../../assets/desc.png'
import method1 from '../../assets/method1.png' 
import method2 from '../../assets/method2.png'
import method3 from '../../assets/method3.png'
import method4 from '../../assets/method4.png'
import ImgMethod from '../../assets/imgMethod.png'
import Footer from '../Elements/Footer'
const Order = () => {
  const [showPopup, setShowPopup] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      
      setShowPopup(true);
      // Clearing messages after some time
      const timeoutId = setTimeout(() => {
        setShowPopup(false);
        setMsg('');
        
        // Redirect after a delay
        const redirectTimeout = setTimeout(() => {
          window.location.href = '/beranda';
        }, 3000); // Adjust the delay time here (in milliseconds)
  
        // Clear the redirect timeout on unmount or if needed
        return () => clearTimeout(redirectTimeout);
  
      }, 1000);
     
      
      
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  }
         
  return (
    <>
        <Navbar />
        <div className="container mx-auto">
            <h1 className='text-3xl font-semibold text-gray-900 mb-6 mt-12'>Detail Pemesanan</h1>
            <img src={Desc} alt="" className='mb-6'/>
            <h1 className='text-3xl font-semibold text-gray-900 mb-6'>Metode Pembayaran</h1>
            <div className='border-2 border-gray-400 p-6 flex flex-col justify-center mb-12 rounded-md'>
                <div className="flex flex-col mx-auto gap-6">
                  <div className="flex gap-4">
                    <img src={method1} alt="" className='focus:border-2 hover:border-[#75319B]'/>
                    <img src={method2} alt="" />
                  </div>
                  <div className="flex gap-4">
                  <img src={method3} alt="" />
                  <img src={method4} alt="" />
                  </div>
                </div>
                <div className='flex justify-end mt-6'>
                        <button onClick={() => setShowPopup(true)} className="inline-flex items-center px-3 py-2 text-xl font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 justify-end">
                            Pesan
                        </button>
                        {showPopup && (
                          <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-40 z-50">
                            <div className="bg-white p-8 rounded-md shadow-md">
                              <p className="text-2xl font-bold mb-4 text-purple-700">Sewa Sukses</p>
                              <p className="text-lg mb-4">Terima kasih telah menggunakan layanan kami</p>
                              <button
                                onClick={() => setShowPopup(false)}
                                className="px-4 py-2 bg-purple-700 text-white rounded-md"
                              >
                                Tutup
                              </button>
                            </div>
                          </div>
                        )}
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Order