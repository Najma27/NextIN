import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Properti from './Pages/Properti';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Detailtema from './Components/Detailtema';
import Detailck from './Components/Detailck';
import Detailaston from './Components/Detailaston';
import Detailrawit from './Components/Detailrawit';
import Edittema from './Components/edittema';
import Editaston from './Components/editaston';
import Editck from './Components/editck';
import Editrawit from './Components/editrawit';
import Tambahkan from './Components/Tambahkan';
import Bantuan from './Pages/Bantuan';
import KeluarH from './Pages/KeluarH';
import Profilpage from './Pages/Profilpage';
import Keamanan from './Pages/Keamanan';
import RiwayatPesanan from './Pages/RiwayatPesanan';
import BelumDibayar from './Pages/BelumDibayar';
import Penyewaan from './Pages/Penyewaan';
import Pselesai from './Pages/Pselesai';
import Pembatalan from './Pages/Pembatalan';
import TampilkamPembatalanPesanan from './Pages/TampilkamPembatalanPesanan';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/properti" element={<Properti />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/detailrawit" element={<Detailrawit />} />
          <Route path="/detailtema" element={<Detailtema />} />
          <Route path="/detailck" element={<Detailck />} />
          <Route path="/detailaston" element={<Detailaston />} />
          <Route path="/edittema" element={<Edittema />} />
          <Route path="/editaston" element={<Editaston />} />
          <Route path="/editck" element={<Editck />} />
          <Route path="/editrawit" element={<Editrawit />} />
          <Route path="/tambahkan" element={<Tambahkan />} />
          <Route path="/" element={<Profilpage />}/>
          <Route path="/RiwayatPesanan" element={<RiwayatPesanan />} />
          <Route path="/Keamanan" element={<Keamanan />} />
          <Route path="/Bantuan" element={<Bantuan />} />
          <Route path="/KeluarH" element={<KeluarH />} />
          <Route path='/BelumDibayar' element={<BelumDibayar />} />
          <Route path='/Penyewaan' element={<Penyewaan />} />
          <Route path='/Pselesai' element={<Pselesai />} />
          <Route path='/Pembatalan' element={<Pembatalan />} />
          <Route path='/TampilkamPembatalanPesanan' element={<TampilkamPembatalanPesanan />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
