const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const multer = require('multer');

const app = express();
app.use(cors());
app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'pemiliktempat'
});

app.get('/', (req, res) => {
    return res.json("this is just the beginning");
});

app.get('/users', (req, res) => {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.post('/api/register', (req, res) => {
    const { email, password } = req.body;
    const sql = "INSERT INTO users (email, password) VALUES (?, ?)";
    
    db.query(sql, [email, password], (err, result) => {
        if (err) return res.json(err);
        return res.json({ success: true, message: 'Registrasi berhasil' });
    });
});

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";

    db.query(sql, [email, password], (err, result) => {
        if (err) return res.json(err);

        if (result.length > 0) {
            return res.json({ success: true, message: 'Login berhasil' });
        } else {
            return res.json({ success: false, message: 'Email atau kata sandi salah' });
        }
    });
});

app.post('/api/tambahkan', upload.single('image'), (req, res) => {
    const { name, theme, location, price, rules, contact, availabilityDate } = req.body;

    const sql = "INSERT INTO tambahkan_tempat (name, theme, location, price, rules, contact, availabilityDate, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

    db.query(sql, [name, theme, location, price, rules, contact, availabilityDate, req.file.buffer], (err, result) => {
        if (err) {
            console.error('Terjadi kesalahan:', err);
            return res.status(500).json({ success: false, message: 'Gagal menyimpan data ke server.' });
        }

        return res.status(200).json({ success: true, message: 'Data berhasil disimpan ke server.' });
    });
});

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
