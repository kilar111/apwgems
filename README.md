# APW Gems - E-commerce Platform

A full-stack e-commerce website for buying and selling premium gemstones built with React, TypeScript, Tailwind CSS, Node.js, Express, and MongoDB.

## Features

- 🔐 User Authentication (Register/Login)
- 💎 Browse and search gemstone products
- 🛒 Shopping cart functionality
- 📦 Order management
- 🎨 Responsive design with Tailwind CSS
- 🔒 Secure JWT authentication
- 💳 Payment integration ready (Stripe)

## Tech Stack

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- Vite
- React Router
- Zustand (State Management)
- Axios

### Backend
- Node.js
- Express
- TypeScript
- MongoDB with Mongoose
- JWT Authentication
- bcrypt

## Project Structure

```
apwgems/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── store/          # Zustand stores
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── index.html
│   └── package.json
│
├── server/                 # Backend Node.js API
│   ├── src/
│   │   ├── models/         # Mongoose models
│   │   ├── routes/         # API routes
│   │   ├── middleware/     # Custom middleware
│   │   └── server.ts
│   └── package.json
│
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   cd c:\Users\User\Desktop\apwgems
   ```

2. **Install Backend Dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Setup Environment Variables**

   Create `.env` file in the `server` directory:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/apwgems
   JWT_SECRET=your-secret-key-change-this
   STRIPE_SECRET_KEY=your-stripe-secret-key
   ```

   Create `.env` file in the `client` directory:
   ```
   VITE_API_URL=http://localhost:5000/api
   ```

### Running the Application

1. **Start MongoDB** (if running locally)
   ```bash
   mongod
   ```

2. **Start Backend Server**
   ```bash
   cd server
   npm run dev
   ```
   Server will run on http://localhost:5000

3. **Start Frontend Development Server** (in a new terminal)
   ```bash
   cd client
   npm run dev
   ```
   Application will run on http://localhost:3000

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (protected)
- `PUT /api/products/:id` - Update product (protected)
- `DELETE /api/products/:id` - Delete product (protected)

### Orders
- `GET /api/orders/my-orders` - Get user orders (protected)
- `GET /api/orders/:id` - Get single order (protected)
- `POST /api/orders` - Create order (protected)

## Building for Production

### Frontend
```bash
cd client
npm run build
```

### Backend
```bash
cd server
npm run build
npm start
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact

For any inquiries, please contact the development team.
