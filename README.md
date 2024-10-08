# Spotify Clone - MERN Stack

This project is a full-stack Spotify clone application built using the MERN stack (MongoDB, Express, React, Node.js) with Cloudinary and Multer for efficient handling of audio and images. Styling is done using Tailwind CSS. It allows users to browse and play songs/albums, while admins can upload new content via a separate dashboard.

## Live Demo

- [Spotify Main App](https://priyadjain9spotify.netlify.app/)
- [Admin Dashboard](https://priyadjain9spotifyadmin.netlify.app/)
- [Backend API](https://mern-spotifyclone.onrender.com/)

## Features

- Browse and play songs and albums
- MongoDB for data handling
- Admin dashboard for uploading songs & albums and deleting them
- Cloudinary integration for media storage
- Media handling using Multer

## Tech Stack

- **Frontend (Main App & Admin Dashboard):**
  - React.js
  - Tailwind CSS
  - Context API for state management
  - Axios for API calls

- **Backend:**
  - Node.js & Express.js
  - MongoDB for database
  - Multer for file uploads
  - Cloudinary for media storage
  - JWT for authentication

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) installed
- [MongoDB](https://www.mongodb.com/) set up

### Installation

#### Backend Set ENV Variables 

- CLOUDINARY_CLOUD_NAME=your_cloud_name
- CLOUDINARY_API_KEY=your_api_key
- CLOUDINARY_API_SECRET=your_api_secret
- MONGODB_URI=your_mongo_db_uri

#### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Priyadj9/spotify-clone.git
   cd spotify-backend/
   Install dependencies -> npm install
   Run Bcakend Server -> npm run server

#### Frontend Setup

1. Clone the main repository for Spotify App:
   ```bash
   git clone https://github.com/Priyadj9/spotify-clone.git
   cd spotify-clone/
   Install dependencies -> npm install
   Run Frontend Server -> npm run dev

2. Clone the repository for Spotify Admin Dashboard:
   ```bash
   git clone https://github.com/Priyadj9/spotify-clone.git
   cd spotify-admin/
   Install dependencies -> npm install
   Run Frontend Server -> npm run dev

# API Endpoints

The backend exposes a number of RESTful API endpoints for managing songs, albums, and user authentication.

## Endpoints

- **POST** `/api/song/add` - Upload a new song (Admin only)
- **POST** `/api/album/add` - Upload a new album (Admin only)
- **POST** `/api/song/remove` - Remove a song (Admin only)
- **POST** `/api/album/remove` - Remove an album (Admin only)
- **GET** `/api/song/list` - Fetch all songs
- **GET** `/api/album/list` - Fetch all albums

# Deployment

The app is deployed using:

- **Frontend**: Netlify
- **Backend**: Render

# Contact

For any questions or suggestions, feel free to reach out:

- **Name**: Priya Jain
- **Email**: priyadarshanajain290@gmail.com
   

   
