# 🚗 Avtomobil Qidiruv Saytiy

## Car Search Website - Complete Automobile Information Platform

Har qanday avtomobil haqida to'liq ma'lumot olish uchun zamonaviy web platformasi.

---

## 📋 Features

✅ **Avtomobil Qidiruvi** - Istalgan avtomobilni nomiga qarab qidirish
✅ **To'liq Ma'lumot** - Har bir avtomobil haqida:
- 🖼️ Avtomobil rasmi
- ⛽ 100 km ga yoqilg'i saflama
- 🔧 Motor sig'imi (Engine Capacity)
- ⚡ Motor quvvati (Horsepower)
- 🏁 0-100 km/h acceleration vaqti
- 🌍 Ishlab chiqargan davlat
- 📅 Ishlab chiqarilgan yil
- 📦 Modellari soni
- 📝 To'liq tavsifi

✅ **Filter Tizimi** - Brend va yil bo'yicha filterlash
✅ **Zamonaviy Dizayn** - Beautiful UI/UX
✅ **Responsive** - Barcha qurilmalarda ishlaydi (mobile, tablet, desktop)
✅ **Katta Database** - 25+ ta mashhur avtomobil
✅ **Tezkor Qidiruv** - Real-time search functionality

---

## 🚀 Setup va Installation

### Requirements
- Node.js (v14 yoki undan yuqori)
- npm yoki yarn
- Git

### Installation Steps

1. **Repository ni clone qiling:**
```bash
git clone https://github.com/yourusername/car-search-app.git
cd car-search-app
```

2. **Dependencies ni install qiling:**
```bash
npm install
```

3. **Server ni ishga tushiring:**
```bash
# Production mode
npm start

# Development mode (nodemon bilan)
npm run dev
```

4. **Web browser da oching:**
```
http://localhost:5000
```

---

## 📁 Project Structure

```
car-search-app/
├── server.js              # Backend server (Express.js)
├── index.html             # Frontend (HTML/CSS/JavaScript)
├── cars.json              # Avtomobillari database
├── package.json           # Node.js dependencies
├── .gitignore             # Git ignore file
└── README.md              # Bu file
```

---

## 🛠️ Technology Stack

**Frontend:**
- HTML5
- CSS3 (Modern, Responsive Design)
- Vanilla JavaScript (No Framework)
- Fetch API

**Backend:**
- Node.js
- Express.js
- CORS

**Database:**
- JSON (cars.json)

---

## 📝 API Endpoints

### GET `/api/cars`
Barcha avtomobillarni olish

**Response:**
```json
[
  {
    "id": 1,
    "brand": "Toyota",
    "model": "Camry",
    "name": "Toyota Camry",
    "year": 2023,
    "country": "Yaponiya",
    "image": "...",
    "fuelConsumption": 7.5,
    "engineCapacity": "2.5L",
    "enginePower": "203 hp",
    "acceleration": 8.5,
    "modelsCount": 15,
    "description": "..."
  }
]
```

### GET `/api/search/:carName`
Avtomobilni nomiga qarab qidirish

**Example:**
```
GET /api/search/Toyota%20Camry
```

### GET `/api/car/:id`
Aniq avtomobilni ID bo'yicha olish

**Example:**
```
GET /api/car/1
```

### GET `/api/brands`
Barcha brendlarni olish

### GET `/api/years`
Barcha yillarni olish

### GET `/api/health`
Server status check

---

## 💾 Database Format

cars.json file da quyidagi format istifodalanil:

```json
{
  "id": 1,
  "brand": "Brand Name",
  "model": "Model Name",
  "name": "Brand Model",
  "year": 2023,
  "country": "Country Name",
  "image": "image_url",
  "fuelConsumption": 7.5,
  "engineCapacity": "2.5L",
  "enginePower": "203 hp",
  "acceleration": 8.5,
  "modelsCount": 15,
  "description": "Description text"
}
```

---

## 🎨 Customization

### Database ni update qilish
`cars.json` file ni edit qilib yangi avtomobillari qo'shing:

```json
{
  "id": 26,
  "brand": "Volkswagen",
  "model": "Passat",
  "name": "Volkswagen Passat",
  "year": 2023,
  "country": "Germaniya",
  "image": "https://...",
  "fuelConsumption": 7.1,
  "engineCapacity": "1.6L",
  "enginePower": "150 hp",
  "acceleration": 8.3,
  "modelsCount": 12,
  "description": "Volkswagen Passat premium sedan..."
}
```

### Design ni customize qilish
`index.html` da CSS variables ni o'zgartiring:

```css
:root {
    --primary-color: #ff6b35;      /* Asosiy rang */
    --secondary-color: #004e89;    /* Ikkinchi rang */
    --accent-color: #1ab394;       /* Aksent rang */
    --dark-bg: #0f1419;
    --light-bg: #f8f9fa;
    --text-dark: #1a1a1a;
    --text-light: #666666;
}
```

---

## 🌐 Deployment

### Heroku da deploy qilish:

1. Heroku account yaratish: https://www.heroku.com
2. Heroku CLI install qilish
3. Quyidagi commands ijro qilish:

```bash
heroku login
heroku create your-app-name
git push heroku main
heroku open
```

### Vercel da deploy qilish (static hosting):
- Frontend ni Vercel ga push qiling
- Backend ni Render yoki Railway da host qiling

### Railway.app da deploy qilish:

1. https://railway.app ga o'ting
2. "New Project" ni tanlang
3. GitHub repository ni connect qiling
4. Deploy qiling

---

## 📊 Database Statistics

Hozirda database da **25+ ta mashhur avtomobil** mavjud:

- **Yaponiya brendlari:** Toyota, Honda, Nissan, Mazda, Subaru, Lexus, Acura, Infiniti
- **Germaniya brendlari:** BMW, Mercedes-Benz, Audi, Volkswagen, Porsche
- **Amerika brendlari:** Ford, Chevrolet, Tesla
- **Italiya brendlari:** Lamborghini, Ferrari
- **Britaniya brendlari:** Rolls-Royce, Jaguar, Bentley
- **Janubi Koreya brendlari:** Hyundai, Kia, Genesis
- **Shvetsiya brendlari:** Volvo

---

## 🐛 Troubleshooting

### "Cannot find module 'express'"
```bash
npm install
```

### Port 5000 allaqachon ishlatilgan
```bash
PORT=3000 npm start
```

### CORS errors
Server.js da CORS already configured. Agar ishlelmasa:
```javascript
app.use(cors({
  origin: '*'
}));
```

---

## 📱 Features Roadmap

- [ ] Authentication (Login/Register)
- [ ] User favorites/bookmarks
- [ ] Car comparison tool
- [ ] Reviews and ratings
- [ ] Advanced filters (price, engine type, etc.)
- [ ] Mobile app
- [ ] Multi-language support
- [ ] Database expansion (thousands of cars)

---

## 📄 License

MIT License - freely istifodalayn

---

## 👥 Contributing

Contributions welcome! Iltimos:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📞 Contact & Support

- 📧 Email: your-email@example.com
- 🐦 Twitter: @yourhandle
- 💬 Discord: Your Discord Server
- 🌐 Website: https://yourwebsite.com

---

## 🙏 Acknowledgments

- Images from Unsplash
- Icons from Unicode
- Inspired by modern car websites

---

**Made with ❤️ for car enthusiasts | GitHub | 2024**

Saytiyni sevdingizmi? ⭐ Star qiling!
