const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();

// Connect Database
connectDB();

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/products', require('./routes/products'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
