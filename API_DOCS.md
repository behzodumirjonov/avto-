# 📡 API Documentation

## Base URL
```
http://localhost:5000
```

---

## 🔍 Search Endpoints

### 1. Search Cars by Name
**GET** `/api/search/:carName`

Avtomobilni nomiga qarab qidirish

**Parameters:**
- `carName` (required) - Avtomobil nomi

**Example Request:**
```
GET /api/search/Toyota%20Camry
GET /api/search/BMW
```

**Success Response (200):**
```json
[
  {
    "id": 1,
    "brand": "Toyota",
    "model": "Camry",
    "name": "Toyota Camry",
    "year": 2023,
    "country": "Yaponiya",
    "image": "https://images.unsplash.com/...",
    "fuelConsumption": 7.5,
    "engineCapacity": "2.5L",
    "enginePower": "203 hp",
    "acceleration": 8.5,
    "modelsCount": 15,
    "description": "Toyota Camry dunyoning eng mashhur sedan..."
  }
]
```

**Error Response (404):**
```json
{
  "error": "Mashina topilmadi. Boshqa nom bilan qidirish uchun urinib ko'ring."
}
```

**Error Response (400):**
```json
{
  "error": "Mashinani nomini kiriting"
}
```

---

### 2. Get Car by ID
**GET** `/api/car/:id`

Aniq avtomobilni ID raqamiga qarab olish

**Parameters:**
- `id` (required) - Avtomobil ID

**Example Request:**
```
GET /api/car/1
GET /api/car/5
```

**Success Response (200):**
```json
{
  "id": 1,
  "brand": "Toyota",
  "model": "Camry",
  "name": "Toyota Camry",
  "year": 2023,
  "country": "Yaponiya",
  "image": "https://images.unsplash.com/...",
  "fuelConsumption": 7.5,
  "engineCapacity": "2.5L",
  "enginePower": "203 hp",
  "acceleration": 8.5,
  "modelsCount": 15,
  "description": "..."
}
```

**Error Response (404):**
```json
{
  "error": "Mashina topilmadi"
}
```

---

## 📋 Data Endpoints

### 3. Get All Cars
**GET** `/api/cars`

Barcha avtomobillarni olish

**Example Request:**
```
GET /api/cars
```

**Success Response (200):**
```json
[
  { car object 1 },
  { car object 2 },
  ...
]
```

**Note:** Array bo'ladi, maxsimal 25+ ta mashina

---

### 4. Get All Brands
**GET** `/api/brands`

Barcha brendlarni olish (A-Z tartibida sorted)

**Example Request:**
```
GET /api/brands
```

**Success Response (200):**
```json
[
  "Acura",
  "Audi",
  "Bentley",
  "BMW",
  "Chevrolet",
  "Ferrari",
  "Ford",
  "Genesis",
  "Honda",
  "Hyundai",
  "Infiniti",
  "Jaguar",
  "Kia",
  "Lamborghini",
  "Lexus",
  "Mazda",
  "Mercedes-Benz",
  "Nissan",
  "Porsche",
  "Rolls-Royce",
  "Subaru",
  "Tesla",
  "Toyota",
  "Volkswagen",
  "Volvo"
]
```

---

### 5. Get All Years
**GET** `/api/years`

Barcha yillarni olish (katta -> kichik tartibida sorted)

**Example Request:**
```
GET /api/years
```

**Success Response (200):**
```json
[
  2023,
  2022,
  2021
]
```

---

## 🏥 Health Check

### 6. Server Health Status
**GET** `/api/health`

Server ishlayapti yoki yo'qligini tekshirish

**Example Request:**
```
GET /api/health
```

**Success Response (200):**
```json
{
  "status": "Server ishlayapti",
  "carsCount": 25
}
```

---

## 📊 Response Status Codes

| Code | Meaning | Description |
|------|---------|-------------|
| 200 | OK | Request successful |
| 400 | Bad Request | Invalid parameters |
| 404 | Not Found | Resource not found |
| 500 | Server Error | Internal server error |

---

## 🔄 Request Examples (JavaScript Fetch)

### Example 1: Search Cars
```javascript
async function searchCars(carName) {
  const response = await fetch(`/api/search/${carName}`);
  const data = await response.json();
  console.log(data);
}

searchCars('Toyota');
```

### Example 2: Get Specific Car
```javascript
async function getCar(id) {
  const response = await fetch(`/api/car/${id}`);
  const car = await response.json();
  console.log(car);
}

getCar(1);
```

### Example 3: Get All Cars
```javascript
async function getAllCars() {
  const response = await fetch('/api/cars');
  const cars = await response.json();
  console.log(`Total cars: ${cars.length}`);
}

getAllCars();
```

### Example 4: Get Filters
```javascript
async function getFilters() {
  const brandsResp = await fetch('/api/brands');
  const yearsResp = await fetch('/api/years');
  
  const brands = await brandsResp.json();
  const years = await yearsResp.json();
  
  console.log('Brands:', brands);
  console.log('Years:', years);
}

getFilters();
```

---

## 🚨 Error Handling

### Try-Catch Pattern
```javascript
async function fetchCar(id) {
  try {
    const response = await fetch(`/api/car/${id}`);
    
    if (!response.ok) {
      const error = await response.json();
      console.error('Error:', error.error);
      return null;
    }
    
    const car = await response.json();
    return car;
  } catch (error) {
    console.error('Network error:', error);
    return null;
  }
}
```

---

## 📈 Query Parameters (Future)

Bu parameters hozir qo'llanilmaydi, lekin qo'shilishi mumkin:

```
GET /api/cars?limit=10&offset=0&sort=brand&order=asc
GET /api/search/Toyota?exact=true&limit=50
```

---

## 🔐 Security Headers

Server quyidagi headerlarni yuborgani:

```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, OPTIONS
Content-Type: application/json
```

---

## 📝 Database Schema

Har bir avtomobil object quyidagi fields ga ega:

```javascript
{
  id: Number,              // Unique identifier
  brand: String,           // Avtomobil brendi (Toyota, BMW, etc.)
  model: String,           // Model nomi (Camry, 3 Series, etc.)
  name: String,            // Full name (brand + model)
  year: Number,            // Ishlab chiqarilgan yil
  country: String,         // Ishlab chiqargan davlat
  image: String,           // Image URL
  fuelConsumption: Number, // 100 km ga L (Electric uchun 0)
  engineCapacity: String,  // Engine size (2.5L, 1.5L Turbo, etc.)
  enginePower: String,     // Horsepower (203 hp, etc.)
  acceleration: Number,    // 0-100 km/h vaqti (seconds)
  modelsCount: Number,     // Necha xil model bor
  description: String      // Avtomobil haqida tavsif
}
```

---

## 🔗 CORS Policy

Saytiy barcha sources dan access olishi mumkin:

```
Access-Control-Allow-Origin: *
```

Agar restricted qilmoqchi bo'lsangiz:

```javascript
app.use(cors({
  origin: 'https://yourwebsite.com'
}));
```

---

## ⚡ Performance Tips

1. **Caching** - API responses ni browser cache qiling
2. **Pagination** - Juda ko'p cars olmagdan paginate qiling
3. **Lazy Loading** - Images lazy load qiling
4. **Compression** - Server gzip compression ishlatsin

---

## 🧪 Testing

### Using cURL
```bash
# Search
curl "http://localhost:5000/api/search/Toyota"

# Get all cars
curl "http://localhost:5000/api/cars"

# Get brands
curl "http://localhost:5000/api/brands"

# Health check
curl "http://localhost:5000/api/health"
```

### Using Postman
1. Postman app oching
2. New Request yaratish
3. GET method tanlash
4. URL kiriting: `http://localhost:5000/api/cars`
5. Send bosish

---

## 📞 API Rate Limiting

Hozirda rate limiting yo'q, lekin production da qo'yish tavsiya etiladi:

```
100 requests / 15 minutes per IP
```

---

## 🔄 Versioning (Future)

Kelasi versiyalar uchun:

```
/api/v2/cars
/api/v2/search/:name
```

---

## 📚 Related Documentation

- [README.md](./README.md) - Full project documentation
- [SETUP.md](./SETUP.md) - Detailed setup guide
- [config.js](./config.js) - Configuration options

---

**Last Updated:** June 2024
**API Version:** 1.0.0
**Status:** Stable ✅
