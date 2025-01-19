# JobHive MERN Application💼

## Description

The **JobHive** is a MERN (MongoDB, Express.js, React.js, Node.js) stack-based project designed to help users manage their job applications effectively. Users can create an account, log in using email or Google, and perform the following tasks:

- 📄 Add, edit, and delete job applications.
- 📊 View a dashboard summarizing application statuses.
- 📅 Track interviews and deadlines.
- 📎 Upload and manage resumes.

---

## Features

- **🔒 User Authentication**: Sign up, log in, log out, and Google OAuth support.
- **📂 Job Application Tracking**: Add, edit, and delete applications.
- **📤 Resume Management**: Upload and download resumes (stored in Cloudinary).
- **📈 Dashboard**: Visualize the status of job applications.
- **🗓️ Interview Scheduler**: Keep track of interview dates.

---

## Tech Stack

- **Frontend**: React.js with Vite
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **File Storage**: Cloudinary

---

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js (>= 14.x)
- npm or Yarn
- MongoDB Atlas account
- Cloudinary account
- Render account (for deployment)

### Steps to Run Locally

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/ankitray-03/JobHive.git
   cd JobHive
   ```

2. **Set Up the Backend**:

   - Navigate to the backend folder:
     ```bash
     cd api
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the `api` folder and add the following:
     ```env
     PORT=3000
     MONGO_URI=your_mongo_atlas_connection_string
     JWT_SECRET=your_jwt_secret
     CLOUDINARY_URL=your_cloudinary_url
     ```
   - Start the backend server:
     ```bash
     npm start
     ```

3. **Set Up the Frontend**:

   - Navigate to the frontend folder:
     ```bash
     cd client
     ```
   - Install dependencies:

     ```bash
     npm install
     ```

   - Start the frontend server:
     ```bash
     npm run dev
     ```

4. **Access the Application**:
   - Open your browser and go to `http://localhost:5173`.

---

## Usage

- **Sign Up**: Create an account using email or Google OAuth.
- **Add Applications**: Track the status of job applications.
- **Dashboard**: View summary statistics and upcoming deadlines.
- **Resume Upload**: Upload and manage resumes.

---

## License

This project is licensed under the MIT License.

---

## Contact

For inquiries or support, reach out to:

- **Name**: Ankit Kumar Ray
- **Email**: ankitray0308@gmail.com
- **GitHub**: [ankitray-03](https://github.com/ankitray-03)
