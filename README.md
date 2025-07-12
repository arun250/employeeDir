# 👩‍💼 Employee Directory

A simple Employee Directory web app built using **Java** and **FreeMarker** for templating, with **vanilla JavaScript**, **HTML**, and **CSS** for front-end logic.

---

## 🚀 Features

- 🔍 Filter employees by name/email
- 🔢 Show 10 / 20 / 50 employees per view
- 🧑‍💼 Add, Edit, and Delete employees (in-memory)
- 🎯 Paginated display based on dropdown
- 🎨 Responsive design
- 🧾 Department & Role as dropdown fields
- 📄 Freemarker template rendering

---

## 🛠️ Technologies Used

- **Java** (for running the server and injecting mock data)
- **FreeMarker** (HTML template rendering)
- **Vanilla JavaScript** (form logic, filtering, rendering)
- **HTML/CSS** (UI layout and styling)

---

|Dashboard|

<img src = "https://res.cloudinary.com/diejm0elz/image/upload/v1752307077/Bildschirmfoto_2025-07-12_um_13.07.21_xpnuob.png" width= 400/>

|Add and Filter Components|

<img src = "https://res.cloudinary.com/diejm0elz/image/upload/v1752307077/Bildschirmfoto_2025-07-12_um_13.07.43_bcem8b.png" width= 400/>




## 📁 Project Structure

    employee-directory/
    │
    ├── Main.java # Java entry point
    ├── freemarker.jar # FreeMarker library
    ├── dashboard.ftl # Freemarker HTML template
    ├── script.js # Front-end JS (rendering, filtering, form logic)
    ├── style.css # Stylesheet
    └── README.md

---

## ▶️ How to Run

This is a **local Java + FreeMarker server** setup (no Spring or frameworks).

### 1. Clone the repo
git clone https://github.com/arun250/employeeDir.git

cd employee-directory

### 2. Download FreeMarker
Download freemarker.jar

Place it in your project folder.

### 3. Compile and Run
Main.java
-cp .:freemarker.jar Main
