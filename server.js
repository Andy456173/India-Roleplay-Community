const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Sample user data (in a real application, this should be stored in a database)
const users = [
    { username: 'staff', password: 'staff123', role: 'staff' },
    { username: 'hr', password: 'hr123', role: 'hr' },
    { username: 'founder', password: 'founder123', role: 'founder' }
];

// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.json({ success: true, message: 'Login successful!' });
    } else {
        res.json({ success: false, message: 'Invalid username or password.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});