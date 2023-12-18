import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8081/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          navigate("/properti");
        } else {
          alert(data.message);
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Terjadi kesalahan, silakan coba lagi");
      });
  };

  return (
    <div className="register-page" style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      <div className="register-image" style={{ flex: "1", backgroundImage: "url('/src/assets/pexels-photo-597909.jpeg')", backgroundSize: "cover" }}></div>
      <div className="register-form" style={{ flex: "1", backgroundColor: "white", padding: "50px" }}>
        <h1 style={{ color: "#303135", fontWeight:"bold", fontSize:"20px", marginBottom:"40px" }}>Isi Detail Akunmu</h1>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ border: "1px solid #cccccc", padding: "10px" }} placeholder="Email"/>
          <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ border: "1px solid #cccccc", padding: "10px" }} placeholder="Nama Lengkap" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ border: "1px solid #cccccc", padding: "10px" }} placeholder="Kata Sandi"/>
          <p required style={{fontSize:"12px", color:"#71747D"}}>Min. 7 karakter kombinasi angka, huruf besar dan huruf kecil.</p>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ border: "1px solid #cccccc", padding: "10px" }} placeholder="Konfirmasi Kata Sandi"/>
          <p required style={{fontSize:"12px", color:"#71747D"}}>Min. 7 karakter kombinasi angka, huruf besar dan huruf kecil.</p>
          <button type="submit" style={{ backgroundColor: "#0099ff", color: "white", padding: "10px", borderRadius: "5px", fontWeight:"bold" }}>Buat Akun</button>
        </form>
        <p style={{ color: "#71747D", fontSize: "14px", textAlign:"center", marginTop:"10px"}}> Data Anda akan dilindungi dan tidak akan digunakan tanpa persetujuan Anda. </p>
        <p style={{ color: "#333333", fontSize: "16px", marginTop:"30px", textAlign:"center"}}>Sudah punya akun? <a href="/login" style={{ color: "#0099ff", fontWeight: "bold" }}>Login di sini</a></p>
        <p style={{ color: "#71747D", fontSize: "14px", marginTop:"60px", textAlign:"center"}}> Dengan membuat akun kamu menyetujui <a href="/syarat-ketentuan" style={{ color: "#0099ff" }}>Syarat & Ketentuan</a> dan <a href="/kebijakan-privasi" style={{ color: "#0099ff" }}>Kebijakan Privasi</a> kami. </p>
        <p style={{ color: "#71747D", fontSize: "12px", marginTop:"40px", textAlign:"center"}}> © 2023 PT. NextIN Indonesia . All Rights Reserved. </p>
      </div>
    </div>
  );
}

export default Register;