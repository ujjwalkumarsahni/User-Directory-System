# **User Directory System**

A full-stack web application for managing user profiles with Create, Read, Update, and Delete (CRUD) functionality. This project is built with **Node.js**, **Express.js**, **MongoDB**, and **EJS**, styled using **Tailwind CSS** for a responsive and user-friendly interface.

---

## **Features**

- **Create:** Add new users with essential details such as name, email, and profile image.
- **Read:** View a dynamic list of all users displayed in a responsive card layout.
- **Update:** Edit user information via an intuitive form.
- **Delete:** Remove users with a single click.
- **Responsive Design:** Built with Tailwind CSS for a seamless experience across devices.
- **Seamless Database Integration:** Powered by MongoDB for robust data persistence.

---

## **Tech Stack**

### **Frontend:**
- HTML
- Tailwind CSS
- EJS (Embedded JavaScript for server-side rendering)

### **Backend:**
- Node.js
- Express.js

### **Database:**
- MongoDB with Mongoose ORM

---

## **Installation and Setup**

### **1. Prerequisites:**
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### **2. Clone the Repository:**
```bash
https://github.com/ujjwalkumarsahni/User-Directory-System.git
```

### **3. Install Dependencies:**
Navigate to the project folder and run:
```bash
npm install
```

### **4. Configure Environment Variables:**
Create a `.env` file in the root of the project and add your MongoDB URI:
```
MONGO_URI=mongodb://127.0.0.1:27017/yourDatabaseName
```

### **5. Start the Application:**
Run the following command:
```bash
npm start
```

The application will be available at `http://localhost:3000`.

---

## **Usage**

### **Homepage**
View the list of all users in a responsive layout. If no users exist, a message will be displayed indicating an empty directory.

### **Add User**
Navigate to the "Add User" page to create a new user by filling out the form with name, email, and profile image URL.

### **Edit User**
Click the "Edit" button on a user card to modify their details.

### **Delete User**
Click the "Delete" button on a user card to remove the user from the directory.


## **Acknowledgments**
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [EJS](https://ejs.co/)
