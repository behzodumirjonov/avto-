const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Load cars database
let carsDatabase = [];
try {
  const dbPath = path.join(__dirname, 'cars.json');
  carsDatabase = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
} catch (error) {
  console.error('Error loading database:', error);
}

// API endpoint - Mashinani qidirish
app.get('/api/search/:carName', (req, res) => {
  const searchTerm = req.params.carName.toLowerCase().trim();
  
  if (!searchTerm) {
    return res.status(400).json({ error: 'Mashinani nomini kiriting' });
  }

  // Exact match yoki partial match qidirish
  const results = carsDatabase.filter(car => 
    car.name.toLowerCase().includes(searchTerm) ||
    car.brand.toLowerCase().includes(searchTerm) ||
    car.model.toLowerCase().includes(searchTerm)
  );

  if (results.length === 0) {
    return res.status(404).json({ error: 'Mashina topilmadi. Boshqa nom bilan qidirish uchun urinib ko\'ring.' });
  }

  res.json(results);
});

// API endpoint - Aniq mashinani olish
app.get('/api/car/:id', (req, res) => {
  const car = carsDatabase.find(c => c.id === parseInt(req.params.id));
  
  if (!car) {
    return res.status(404).json({ error: 'Mashina topilmadi' });
  }

  res.json(car);
});

// API endpoint - Barcha mashinalar
app.get('/api/cars', (req, res) => {
  res.json(carsDatabase);
});

// API endpoint - Brend bo'yicha filter
app.get('/api/brands', (req, res) => {
  const brands = [...new Set(carsDatabase.map(car => car.brand))].sort();
  res.json(brands);
});

// API endpoint - Year bo'yicha filter
app.get('/api/years', (req, res) => {
  const years = [...new Set(carsDatabase.map(car => car.year))].sort((a, b) => b - a);
  res.json(years);
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server ishlayapti', carsCount: carsDatabase.length });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route topilmadi' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Server xatosi yuz berdi' });
});

app.listen(PORT, () => {
  console.log(`🚗 Server ${PORT} portda ishlayapti`);
  console.log(`📊 Database: ${carsDatabase.length} ta mashina`);
  console.log(`🌐 http://localhost:${PORT}`);
});
