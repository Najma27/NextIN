import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const Auth = async(e) =>{
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/login',{
          email: email,
          password: password,
      });
      navigate("/properti");
    } catch (error){
        if(error.response){
          setMsg(error.response.data.msg);
        }
    }
  };

  return (
    <div className="login-page" style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      <div className="login-image" style={{ flex: "1", backgroundImage: "url('/src/assets/pexels-photo-597909.jpeg')", backgroundSize: "cover" }}></div>
      <div className="login-form" style={{ flex: "1", backgroundColor: "white", padding: "50px" }}>
        <h1 style={{ color: "#303135", fontWeight:"bold", fontSize:"20px", marginBottom:"40px"}}>Log in</h1>
        <form onSubmit={Auth} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p className="hash-text-centered">{msg}</p>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)} required style={{ border: "1px solid #cccccc", padding: "10px" }}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} required style={{ border: "1px solid #cccccc", padding: "10px" }}
          placeholder="Kata Sandi"
        />
        <button className="button is-success id-fullwidth" type="submit" style={{ backgroundColor: "#392467", color: "white", padding: "10px", borderRadius: "5px", fontWeight:"bold" }}>Log In</button>
        </form>
        <p style={{ color: "#71747D", fontSize: "14px", marginTop:"30px", textAlign:"center"}}> Dengan Login kamu menyetujui <a href="/syarat-ketentuan" style={{ color: "#A367B1" }}>Syarat & Ketentuan</a> dan <a href="/kebijakan-privasi" style={{ color: "#A367B1" }}>Kebijakan Privasi</a> kami. </p>
        <p style={{ color: "#333333", fontSize: "16px", marginTop:"30px", textAlign:"center"}}>Belum punya akun? 
          <a href="/register" style={{ color:"#392467", fontWeight:"bold" }}>Buat Akun yuk!</a>
        </p>
        <p style={{ color: "#71747D", fontSize: "12px", marginTop:"300px", textAlign:"center"}}> © 2023 PT. NextIN Indonesia . All Rights Reserved. </p>
      </div>
    </div>
  );
}

export default Login;
