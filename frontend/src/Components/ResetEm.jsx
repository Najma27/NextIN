import React from 'react'

const ResetEm = ( isopen, onclose) => {
  return (
 
        <div className="bg-white p-6 rounded-md">
            <p className="text-black">
                Untuk keamanan akun, mohon verifikasi identitas Anda dengan klik salah satu cara di bawah ini:
            </p>

            <div className="flex justify-center items-center mt-3">
                <input type="email" placeholder="Masukkan Email Anda"className="border rounded-md p-2 mr-2"/>

            <img src="src/assets/email-icon.svg" alt="Email Icon"className="w-8 h-8"/>
            </div>
        </div>
     
  )
}

export default ResetEm
