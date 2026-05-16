# 📱 DatingApp - Full Stack Web Application

This is a modern, full-stack dating application built using a **.NET API** on the backend and **Angular** on the frontend (client). The project follows clean architecture principles and industry standards for web development.

---

## 🛠️ Tech Stack & Architecture

### **Backend (.NET API)**
* **Framework:** .NET Core API
* **Database:** SQLite (Development) / Entity Framework Core (Code-First Approach)
* **Security & Authentication:** JWT (JSON Web Tokens) and ASP.NET Core Identity
* **Architecture:** Repository Pattern, Unit of Work, Global Exception Handling Middleware
* **Third-Party Libraries:** AutoMapper, SignalR (for real-time features)

### **Frontend (Client)**
* **Framework:** Angular
* **Styling:** Bootstrap & Ngx-Bootstrap components
* **State Management:** RxJS (BehaviorSubjects and Observables)
* **Routing:** Angular Router with Auth Guards for protected routes
* **HTTP Interceptors:** For automatic JWT token attachment and global error handling

---

## ✨ Key Features

* **Complete Auth System:** User registration and login with hashed passwords and JWT authentication.
* **User Profiles:** Detailed profile editing, including multi-photo uploads integrated with Cloudinary.
* **Liking System:** Users can like each other, with advanced filtering to track mutual likes.
* **Real-Time Chat:** Implemented via .NET SignalR for instant message delivery without page refreshes.
* **Advanced Filtering & Pagination:** Filter members by age, gender, and last active status, backed by full server-side pagination and sorting.
* **User Roles & Authorization:** Admin panel for managing user roles and moderating photos.

---

## 🚀 Getting Started (Local Deployment)

### Prerequisites
* [.NET SDK](https://dotnet.microsoft.com/download)
* [Node.js & NPM](https://nodejs.org/)
* [Angular CLI](https://angular.io/cli)

### 1. Run the Backend (API)
Open your terminal in the `/API` directory and run:
```bash
dotnet restore
dotnet watch run

The API will start and listen on https://localhost:5001

2. Run the Frontend (Client)
npm install
ng serve

📂 Project Structure
/API - .NET Core Web API containing Controllers, Entities, Data Context, and Services.

/client - Angular application containing Components, Services, Modules, and Styles.

.vscode - Launch configurations for seamless debugging directly from VS Code.
