# 🔧 Detailed Setup Guide

## Project Structure Setup

Quyidagi structure yaratish kerak:

```
car-search-app/
│
├── server.js                 # Backend server
├── cars.json                 # Database
├── package.json              # Dependencies
├── .gitignore
├── README.md
│
├── public/                   # Create this folder
│   └── index.html            # Frontend file
│
└── node_modules/             # Auto-created (npm install)
```

---

## Step-by-Step Installation

### 1️⃣ **Project Folder Yaratish**

```bash
# Yangi folder yaratish
mkdir car-search-app
cd car-search-app
```

### 2️⃣ **Files ni Qo'yish**

Quyidagi files ni project folderiga copy qiling:
- `server.js`
- `cars.json`
- `package.json`
- `.gitignore`
- `README.md`

### 3️⃣ **Public Folder Yaratish**

```bash
# Windows
mkdir public

# Linux/Mac
mkdir public
```

### 4️⃣ **index.html ni Public Folderiga Qo'yish**

`index.html` file ni `public` folderiga joylashtiring.

### 5️⃣ **Dependencies Install Qilish**

```bash
npm install
```

Bu command quyidagilarni install qiladi:
- express (web server)
- cors (CORS support)
- nodemon (optional, development uchun)

### 6️⃣ **Server ni Run Qilish**

```bash
# Production
npm start

# Development (nodemon bilan - auto restart)
npm run dev
```

Natija:
```
🚗 Server 5000 portda ishlayapti
📊 Database: 25 ta mashina
🌐 http://localhost:5000
```

### 7️⃣ **Browser da Oching**

Browser address bar ga yozun:
```
http://localhost:5000
```

Saytiy yuklandi! ✅

---

## 🔌 Port Sozlash

Agar 5000 port allaqachon ishlatilgan bo'lsa:

```bash
# Windows
set PORT=3000 && npm start

# Linux/Mac
PORT=3000 npm start
```

---

## GitHub ga Push Qilish

### 1. Git Initialize Qilish

```bash
git init
git add .
git commit -m "Initial commit: Car search app"
```

### 2. GitHub Repository Yaratish

1. GitHub.com ga o'ting
2. "New repository" bosing
3. Repository nomini kiriting: `car-search-app`
4. Description qo'shing
5. Create repository bosing

### 3. Remote Add Qilish

```bash
git remote add origin https://github.com/yourusername/car-search-app.git
git branch -M main
git push -u origin main
```

### 4. Verify

Repository page ni refresh qiling. Barcha files ko'rinib turishi kerak! 🎉

---

## 🚀 Heroku da Hosting

### 1. Heroku Account Yaratish
https://www.heroku.com ga o'ting va sign up qiling

### 2. Heroku CLI Install Qilish

**Windows:**
https://devcenter.heroku.com/articles/heroku-cli (installer ni download)

**Linux/Mac:**
```bash
curl https://cli-assets.heroku.com/install.sh | sh
```

### 3. Login Qilish

```bash
heroku login
```

### 4. Heroku App Yaratish

```bash
heroku create your-unique-app-name
```

Misol:
```bash
heroku create my-car-search-app
```

### 5. Deploy Qilish

```bash
git push heroku main
```

### 6. Oching

```bash
heroku open
```

Yoki browser da:
```
https://your-unique-app-name.herokuapp.com
```

---

## 🏗️ Railway.app da Hosting

### 1. Railway.app Sign Up
https://railway.app ga o'ting

### 2. New Project

"New Project" → "Deploy from GitHub repo" bosing

### 3. GitHub Repository Select Qilish

Sizning car-search-app repository ni tanlang

### 4. Configuration

Environment variables (optional):
```
NODE_ENV=production
PORT=5000
```

### 5. Deploy

Automatic deploy boladi! 🚀

---

## 💻 Local Development

### Nodemon bilan Development

Nodemon - avtomatik restart qiladi code o'zgarganda

```bash
npm install --save-dev nodemon
npm run dev
```

### Debug Mode

Browser developer tools (F12):
1. Network tab - API calls ko'rish
2. Console tab - Errors ko'rish
3. Elements tab - HTML structure ko'rish

---

## 🐛 Common Issues va Solutions

### Issue 1: "Port 5000 already in use"

**Solution:**
```bash
# Windows - process find qilish
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Linux/Mac
lsof -i :5000
kill -9 <PID>
```

### Issue 2: "Cannot GET /"

**Solution:**
- `public` folder yaratganingizni tekshiring
- `index.html` public folderiga qo'yganingizni tekshiring
- Server ishlaydimi tekshiring

### Issue 3: CORS errors

**Solution:**
`server.js` da cors middleware ishlaydimi tekshiring:
```javascript
app.use(cors());
```

### Issue 4: Database error

**Solution:**
- `cars.json` path correct ekanini tekshiring
- JSON syntax valid ekanini tekshiring (online JSON validator istifodalayin)

### Issue 5: Images not loading

**Solution:**
- Image URL valid ekanini tekshiring
- Internet connection check qiling
- Fallback placeholder image ishlaydimi tekshiring

---

## 📚 Learning Resources

### Express.js
- Docs: https://expressjs.com
- Tutorial: https://www.youtube.com/results?search_query=express+js+tutorial

### Node.js
- Docs: https://nodejs.org
- W3Schools: https://www.w3schools.com/nodejs/

### Vanilla JavaScript
- MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- W3Schools: https://www.w3schools.com/js/

### REST API
- Beginner Guide: https://www.restapitutorial.com/
- HTTP Status Codes: https://httpwg.org/specs/rfc7231.html

---

## 📞 Getting Help

1. **Error Message Googling**
   - Error message ni copy qilib Google search qiling

2. **Stack Overflow**
   - https://stackoverflow.com - Q&A platform

3. **GitHub Issues**
   - Repository uzzida issue open qiling

4. **Discord Communities**
   - Node.js communities
   - Web development communities

---

## ✅ Verification Checklist

Setup complete dini tekshiring:

- [ ] Folder structure correct
- [ ] `npm install` bajarilgan
- [ ] Server ishlamoqda (`npm start`)
- [ ] Browser da `http://localhost:5000` ocha
- [ ] Search functionality ishlaydi
- [ ] Filters ishlaydi
- [ ] Detail modal ochiladi
- [ ] GitHub ga push qilgan
- [ ] Heroku/Railway da deployed

Hamma checkmark ✅ bo'lsa, siz tayyor! 🎉

---

**Happy Coding! 🚀**
