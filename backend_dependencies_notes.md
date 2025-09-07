# 📘 Backend Dependencies Notes

This project uses several npm packages for backend development.  
Here’s a quick reference:

---

## 🔑 bcrypt (`^6.0.0`)
- Used to **hash passwords** before saving them in the database.  
- Provides secure password storage.  
- Example:
  ```js
  const bcrypt = require("bcrypt");
  const hashed = await bcrypt.hash("mypassword", 10);
  ```

---

## 🌍 cors (`^2.8.5`)
- Stands for **Cross-Origin Resource Sharing**.  
- Allows frontend (React) and backend (Express) to communicate if they are on different domains/ports.  
- Example:
  ```js
  const cors = require("cors");
  app.use(cors());
  ```

---

## ⚙️ dotenv (`^17.2.2`)
- Loads variables from a `.env` file into `process.env`.  
- Keeps sensitive information (like `PORT`, `DB_URI`, `JWT_SECRET`) safe.  
- Example:
  ```js
  require("dotenv").config();
  console.log(process.env.PORT);
  ```

---

## 🚏 express (`^5.1.0`)
- Web framework for Node.js.  
- Handles **routes, requests, and responses**.  
- Example:
  ```js
  const express = require("express");
  const app = express();
  app.get("/", (req, res) => res.send("Hello World"));
  ```

---

## 🔒 jsonwebtoken (`^9.0.2`)
- Implements **JWT (JSON Web Tokens)** for authentication.  
- Used to log in users and protect routes.  
- Example:
  ```js
  const jwt = require("jsonwebtoken");
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  ```

---

## 🗄️ mongoose (`^8.18.0`)
- ODM (Object Data Modeling) library for MongoDB.  
- Lets you define schemas and interact with MongoDB more easily.  
- Example:
  ```js
  const mongoose = require("mongoose");
  mongoose.connect(process.env.MONGO_URI);
  ```

---

# ✅ Summary
- **bcrypt** → Hash passwords  
- **cors** → Enable cross-origin requests  
- **dotenv** → Manage environment variables  
- **express** → Build API routes  
- **jsonwebtoken** → Secure authentication with JWT  
- **mongoose** → Manage MongoDB database
