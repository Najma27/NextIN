import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8081/api/login", {
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
    <div className="login-page" style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      <div className="login-image" style={{ flex: "1", backgroundImage: "url('/src/assets/pexels-photo-597909.jpeg')", backgroundSize: "cover" }}></div>
      <div className="login-form" style={{ flex: "1", backgroundColor: "white", padding: "50px" }}>
        <h1 style={{ color: "#303135", fontWeight:"bold", fontSize:"20px", marginBottom:"40px"}}>Log in</h1>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} required style={{ border: "1px solid #cccccc", padding: "10px" }}
          placeholder="Nomor Ponsel atau Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} required style={{ border: "1px solid #cccccc", padding: "10px" }}
          placeholder="Kata Sandi"
        />
        <button type="submit" style={{ backgroundColor: "#0099ff", color: "white", padding: "10px", borderRadius: "5px", fontWeight:"bold" }}>Log In</button>
        </form>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" }}>
          <p style={{ color: "#71747D", fontSize: "16px" }}>- atau login dengan -</p>
          <div style={{ display: "flex", gap: "50px", marginTop:"30px", marginBottom:"50px"}}>
            <a href="/login/google" style={{ textDecoration: "none" }}>
              <img src="/src/assets/google.png" alt="Google icon" width="32" height="32" />
            </a>
            <a href="/login/facebook" style={{ textDecoration: "none" }}>
              <img src="/src/assets/facebook.png" alt="Facebook icon" width="32" height="32" />
            </a>
          </div>
        </div>
        <p style={{ color: "#71747D", fontSize: "14px", marginTop:"30px", textAlign:"center"}}> Dengan Login kamu menyetujui <a href="/syarat-ketentuan" style={{ color: "#0099ff" }}>Syarat & Ketentuan</a> dan <a href="/kebijakan-privasi" style={{ color: "#0099ff" }}>Kebijakan Privasi</a> kami. </p>
        <p style={{ color: "#333333", fontSize: "16px", marginTop:"30px", textAlign:"center"}}>Belum punya akun? 
          <a href="/register" style={{ color:"#0099ff", fontWeight:"bold" }}>Buat Akun yuk!</a>
        </p>
        <p style={{ color: "#71747D", fontSize: "12px", marginTop:"170px", textAlign:"center"}}> © 2023 PT. NextIN Indonesia . All Rights Reserved. </p>
      </div>
    </div>
  );
}

export default Login;
