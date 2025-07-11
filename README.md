# 🧑‍💼 Employee Management System (EMS) – Full Stack Web Application

A modern Full Stack **Employee Management System** built using **Spring Boot** (Backend), **React + Vite** (Frontend), and **MySQL** (Database). The application allows you to perform CRUD operations on employee records with proper validations and user feedback.

---

## 📌 Features

- 🔄 Create, Read, Update, Delete (CRUD) Employees
- ⚠️ Email duplication validation
- ✅ Field-level form validation (React + Bootstrap)
- 🔒 Secured backend with exception handling
- 🎨 Responsive UI using Bootstrap
- ⚙️ Axios integration for REST API calls
- 📦 Organized codebase with DTOs, Services, Controllers

---

## 🖼️ Screenshots

### 🔹 EMS Dashboard
![EMS Screenshot](https://i.ibb.co/tMt1HjdN/Screenshot-2025-07-11-184416.png)

---

## 🛠️ Tech Stack

| Frontend        | Backend       | Database | Tools & Utilities     |
|-----------------|---------------|----------|------------------------|
| React + Vite    | Spring Boot   | MySQL    | Axios, Bootstrap       |
| React Bootstrap | Java 17       |          | Postman, Git & GitHub  |

---

## 🔗 GitHub Repository

📂 EMS_FULLSTACK:  
👉 [https://github.com/saihemanth517/EMS_FULLSTACK.git](https://github.com/saihemanth517/EMS_FULLSTACK.git)

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/saihemanth517/EMS_FULLSTACK.git
cd EMS_FULLSTACK
2️⃣ Backend Setup (Spring Boot)
Go to: ems-backend

Configure your database in src/main/resources/application.properties:

properties
Copy
Edit
spring.datasource.url=jdbc:mysql://localhost:3306/your_db
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
Run the Spring Boot Application.

3️⃣ Frontend Setup (React + Vite)
bash
Copy
Edit
cd ems-frontend
npm install
npm run dev
Access the app at:
🔗 http://localhost:3000

📡 API Endpoints
Method	Endpoint	Description
GET	/api/employees	Get all employees
POST	/api/employees	Add a new employee
GET	/api/employees/{id}	Get employee by ID
PUT	/api/employees/{id}	Update employee
DELETE	/api/employees/{id}	Delete employee

🛡️ Error Handling
🔁 Duplicate Email Handling:
Returns 400 Bad Request with:
"Email is already in use."

❌ Resource Not Found:
Returns 404 Not Found with custom message.

📂 Folder Structure
bash
Copy
Edit
EMS_FULLSTACK/
├── ems-backend/         # Spring Boot backend
└── ems-frontend/        # React + Vite frontend
👨‍💻 Developed By
Sai Hemanth
GitHub: @saihemanth517

📄 License
This project is open-source and available under the MIT License.

yaml
Copy
Edit
