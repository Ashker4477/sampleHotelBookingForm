const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const hotelRouter = require('./routers/hotelRouters');
const path = require('path');

dotenv.config();

const app = express();

app.use(
    cors({
        origin: 'http://localhost:3000',
    }),
);

app.use(express.json());
app.use('/hotel', hotelRouter);

app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'));
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
