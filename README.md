# 📚 BCA Previous Year Assignments (2022–2025)

An interactive, responsive, and modern web portal providing a complete question bank for **Bachelor of Computer Applications (BCA)** students. Easily browse, search, and filter previous year assignment questions organized by semester, subject, year, assignment, and **Course Outcomes (COs)**.

🌐 **Live Demo**: [https://harshkumar1215.github.io/AGC-BCA-Assignment/](https://harshkumar1215.github.io/AGC-BCA-Assignment/)

---

## ✨ Features

- 📖 **Comprehensive Question Bank**: Covers **11+ Subjects**, **4 Academic Years (2022–2025)**, **88+ Assignments**, and over **3600+ Questions**.
- 🎯 **Strict Assignment-wise CO Filtering**:
  - **Assignment 1**: Automatically displays and filters **CO1, CO2, CO3**.
  - **Assignment 2**: Automatically displays and filters **CO4, CO5, CO6**.
  - Clicking any CO chip instantly filters questions mapped specifically to that Course Outcome.
- 🔍 **Real-Time Search & Highlighting**: Instantly search questions, comprehension passages, or sub-questions with keyword highlighting.
- 🏷️ **Marks & Section Breakdown**:
  - **Section A**: 2 Marks Each (Short Answer Questions)
  - **Section B**: 4 Marks Each (Long Answer & Passage Questions)
- 🎨 **Modern Dark UI**: Features vibrant glowing badges, glassmorphism cards, interactive particle background, and responsive tabs for mobile & desktop.
- ⚡ **Zero Dependencies**: Pure HTML5, Vanilla CSS3, and JavaScript logic — fast, lightweight, and offline-capable.

---

## 🎓 Subjects Covered

### **Semester 1**
- 💻 **Problem Solving using C** (`UGCA 1903`)
- 📖 **Foundation Course in English I** (`AEC-24101`)
- 🖥️ **Fundamentals of Computer and IT** (`BCA24101`)
- 🌱 **Human Values & Professional Ethics** (`HVPE 101-18`)

### **Semester 2**
- 📖 **Foundation Course in English II** (`AEC-24201`)
- 🖥️ **Object-Oriented Programming using C++** (`BCA24203`)
- ⚙️ **Computer System Architecture** (`BCA-24202`)
- 📊 **Fundamentals of Statistics** (`BCA-24205`)
- 🌍 **Environmental Studies** (`VAC-24201`)

### **Semester 3**
- 🤖 **Introduction to Artificial Intelligence** (`BCA24307`)
- 🌐 **Computer Networks** (`BCA`)
- 🗄️ **Data Structures** (`BCA24302`)

### **Semester 4**
- ⚙️ **Software Engineering** (`BCA24308`)
- 🎨 **Web Designing** (`BCA24303`)

---

## 📂 Project Architecture

```
AGC-BCA-Assignment/
├── index.html     # Main HTML structure, filters, section headers & modal components
├── styles.css     # Design system, CSS variables, dark theme, animations & responsive layout
├── script.js     # State management, dynamic tab rendering, search & CO filtering logic
├── data.js       # Data repository containing Course Outcomes & detailed question bank
└── README.md      # Project documentation
```

---

## 🚀 How to Run Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Harshkumar1215/AGC-BCA-Assignment.git
   ```

2. **Navigate into the project directory**:
   ```bash
   cd AGC-BCA-Assignment
   ```

3. **Open in browser**:
   - Double-click `index.html` to open it directly in any modern browser.
   - Or use VS Code extension **Live Server** / Python command:
     ```bash
     python -m http.server 8000
     ```
   - Open `http://localhost:8000` in your web browser.

---

## 🤝 Contribution & Usage

Feel free to fork this repository, submit issues, or create pull requests to expand question banks or add new semester subjects!

Made with ❤️ for BCA Students.