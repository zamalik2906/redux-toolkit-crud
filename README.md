# 🗂️ User Directory – React + Redux Toolkit (MockAPI Backend)

A **React + Redux Toolkit** CRUD application using **[MockAPI](https://mockapi.io/)** as the backend.  
This app lets you **create, read, update, and delete** users, plus **search** and **filter** them by gender.

---

## 🚀 Features

- ✅ **User CRUD Operations** (Create, Read, Update, Delete) via MockAPI
- ✅ **Search Users** by name (case-insensitive)
- ✅ **Filter Users by Gender** using radio buttons
- ✅ **Responsive Design** (Bootstrap 5)
- ✅ **Toast Notifications** for actions and feedback
- ✅ **Redux Toolkit** for global state management

---

## 📸 Screenshots & Demo

### 🏠 Home Page – User Directory

![Home Page]("./screenshots/home.png")

### 🎥 Demo Video

![Demo Video]("./screenshots/demo.mp4")

---

## 🛠️ Tech Stack

**Frontend:**

- React.js
- Redux Toolkit
- Bootstrap 5
- React Toastify

**Backend:**

- [MockAPI](https://mockapi.io/) – hosted mock REST API

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository

git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name

### 2️⃣ Install Dependencies

npm install

### 3️⃣ Set Your MockAPI Endpoint

In your Redux slice or API config file, replace the base URL with your own MockAPI endpoint:

export const BASE_URL = "https://your-mockapi-url.mockapi.io/crud";

### 4️⃣ Start the Development Server

npm start
