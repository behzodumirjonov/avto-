// config.js - Saytiy customize qilish uchun

const config = {
  // Server Configuration
  server: {
    port: process.env.PORT || 5000,
    host: 'localhost',
    environment: process.env.NODE_ENV || 'development'
  },

  // Database Configuration
  database: {
    path: './cars.json',
    refreshInterval: 3600000 // 1 hour (milliseconds)
  },

  // Frontend Configuration
  frontend: {
    title: '🚗 Avtomobil Qidiruvi',
    subtitle: 'Har qanday avtomobil haqida to\'liq ma\'lumot oling',
    theme: 'dark'
  },

  // Search Configuration
  search: {
    minCharacters: 2,
    maxResults: 50,
    caseSensitive: false
  },

  // API Configuration
  api: {
    prefix: '/api',
    timeout: 5000,
    maxConnections: 100
  },

  // CORS Configuration
  cors: {
    origin: '*',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  },

  // Logging Configuration
  logging: {
    enabled: true,
    level: 'info', // 'error', 'warn', 'info', 'debug'
    format: 'combined' // 'combined', 'short'
  },

  // Security Configuration
  security: {
    rateLimit: {
      enabled: true,
      windowMs: 15 * 60 * 1000, // 15 minutes
      maxRequests: 100
    },
    helmet: {
      enabled: true,
      contentSecurityPolicy: {
        enabled: true
      }
    }
  },

  // Cache Configuration
  cache: {
    enabled: true,
    ttl: 3600, // 1 hour in seconds
    maxSize: 1000 // Max cached items
  },

  // Pagination Configuration
  pagination: {
    defaultLimit: 20,
    maxLimit: 100
  },

  // Error Messages (Uz)
  messages: {
    uz: {
      success: 'Muvaffaqiyatli!',
      error: 'Xatolik yuz berdi',
      notFound: 'Topilmadi',
      unauthorized: 'Sizda ruxsat yo\'q',
      serverError: 'Server xatosi',
      carNotFound: 'Mashina topilmadi',
      noResults: 'Natija topilmadi',
      searchRequired: 'Qidiruv so\'zi majburiy',
      invalidRequest: 'Noto\'g\'ri so\'rov'
    },
    en: {
      success: 'Success!',
      error: 'An error occurred',
      notFound: 'Not found',
      unauthorized: 'Unauthorized',
      serverError: 'Server error',
      carNotFound: 'Car not found',
      noResults: 'No results found',
      searchRequired: 'Search term is required',
      invalidRequest: 'Invalid request'
    }
  },

  // Feature Flags
  features: {
    searchEnabled: true,
    filterEnabled: true,
    filterByBrand: true,
    filterByYear: true,
    detailsModal: true,
    imageLoading: true,
    darkMode: true,
    mobileOptimized: true,
    apiDocs: true
  },

  // External Services
  services: {
    imageApi: 'https://images.unsplash.com',
    placeholderApi: 'https://via.placeholder.com'
  },

  // Analytics (Optional)
  analytics: {
    enabled: false,
    googleAnalyticsId: 'UA-XXXXXXXXX-X',
    trackPageViews: true,
    trackEvents: true
  },

  // Social Media Links
  social: {
    github: 'https://github.com/yourusername/car-search-app',
    twitter: 'https://twitter.com/yourhandle',
    email: 'your-email@example.com',
    website: 'https://yourwebsite.com'
  },

  // App Metadata
  app: {
    name: 'Car Search App',
    version: '1.0.0',
    author: 'Your Name',
    license: 'MIT',
    repository: 'https://github.com/yourusername/car-search-app',
    issues: 'https://github.com/yourusername/car-search-app/issues',
    documentation: 'https://github.com/yourusername/car-search-app/blob/main/README.md'
  }
};

module.exports = config;
