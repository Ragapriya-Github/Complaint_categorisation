# 🚆 AI-Based Complaint Management System for Indian Railways

This project is a smart web-based application that allows passengers to submit complaints to Indian Railways. The system uses a Machine Learning model to automatically classify complaints into categories such as "Cleanliness", "Delay", "Damage", "Staff Behavior", and more. It aims to streamline the complaint redressal process by forwarding issues to the relevant departments.

---

## 🔧 Features

- Submit complaints via a web interface
- Classify complaint text using a trained ML model (Naive Bayes + TF-IDF)
- Predict and display the complaint category
- RESTful API backend using Flask
- Frontend built with React.js
- CORS-enabled for smooth frontend-backend communication

---

## 🧠 Technologies Used

- **Frontend**: React.js, TypeScript, CSS
- **Backend**: Flask (Python)
- **ML Tools**: Scikit-learn, Joblib
- **Other Tools**: Flask-CORS, Vite (React bundler)

---

## 📁 Project Structure

complaint_management/
├── backend/
│ ├── app.py # Flask API server
│ ├── naive_bayes_model.pkl # Trained Naive Bayes model
│ ├── vectorizer.pkl # TF-IDF vectorizer
│ └── requirements.txt # Python dependencies
├── src/ # React frontend
│ ├── App.tsx, main.tsx # Frontend logic
│ ├── App.css, index.css # Styling
├── public/ # Static files
├── package.json # Frontend dependencies
└── README.md # Project documentation

## 🚀 Getting Started

Follow these steps to run the project locally.

---

### 🔹 1. Run the Backend

Navigate to the backend folder and install dependencies:

cd backend
pip install -r requirements.txt
python app.py

### 🔹 2. Run the Frontend

In the root or frontend directory, install dependencies and start the React app:

npm install
npm run dev

---
