import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const Register = async(event) =>{
    event.preventDefault();
    try {
      await axios.post('http://localhost:5000/register',{
          name: name,
          email: email,
          password: password,
          confPassword: confPassword
      });
      navigate("/login");
    } catch (error){
        if(error.response){
          setMsg(error.response.data.msg);
        }
    }
  }

  return (
    <div className="register-page" style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      <div className="register-image" style={{ flex: "1", backgroundImage: "url('/src/assets/pexels-photo-597909.jpeg')", backgroundSize: "cover" }}></div>
      <div className="register-form" style={{ flex: "1", backgroundColor: "white", padding: "50px" }}>
        <p className="has-text-centered">{msg}</p>
        <h1 style={{ color: "#392467", fontWeight:"bold", fontSize:"20px", marginBottom:"40px" }}>Isi Detail Akunmu</h1>
        <form onSubmit={Register} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ border: "1px solid #cccccc", padding: "10px" }} placeholder="Email"/>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required style={{ border: "1px solid #cccccc", padding: "10px" }} placeholder="Nama Lengkap" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ border: "1px solid #cccccc", padding: "10px" }} placeholder="Kata Sandi"/>
          <p required style={{fontSize:"12px", color:"#71747D"}}>Min. 7 karakter kombinasi angka, huruf besar dan huruf kecil.</p>
          <input type="password" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} required style={{ border: "1px solid #cccccc", padding: "10px" }} placeholder="Konfirmasi Kata Sandi"/>
          <p required style={{fontSize:"12px", color:"#71747D"}}>Min. 7 karakter kombinasi angka, huruf besar dan huruf kecil.</p>
          <button type="submit" style={{ backgroundColor: "#392467", color: "white", padding: "10px", borderRadius: "5px", fontWeight:"bold" }}>Buat Akun</button>
        </form>
        <p style={{ color: "#71747D", fontSize: "14px", textAlign:"center", marginTop:"10px"}}> Data Anda akan dilindungi dan tidak akan digunakan tanpa persetujuan Anda. </p>
        <p style={{ color: "#333333", fontSize: "16px", marginTop:"30px", textAlign:"center"}}>Sudah punya akun? <a href="/login" style={{ color: "#392467", fontWeight: "bold" }}>Login di sini</a></p>
        <p style={{ color: "#71747D", fontSize: "14px", marginTop:"60px", textAlign:"center"}}> Dengan membuat akun kamu menyetujui <a href="/syarat-ketentuan" style={{ color: "#A367B1" }}>Syarat & Ketentuan</a> dan <a href="/kebijakan-privasi" style={{ color: "#A367B1" }}>Kebijakan Privasi</a> kami. </p>
        <p style={{ color: "#71747D", fontSize: "12px", marginTop:"100px", textAlign:"center"}}> © 2023 PT. NextIN Indonesia . All Rights Reserved. </p>
      </div>
    </div>
  );
}

export default Register;