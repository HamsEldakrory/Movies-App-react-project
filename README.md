# 🎬 Movie App


## 🌟 Overview
Movie App is a sleek and modern **React-based web application** that lets users explore movies, view details, search for their favorite films, and manage a wishlist. The app fetches real-time data from **The Movie Database (TMDb) API** and supports multiple languages for a seamless user experience.



## 🚀 Features
✅ **Browse** the latest now-playing movies.  
✅ **Get detailed insights** including reviews and recommendations.  
✅ **Search for movies** effortlessly.  
✅ **Add and remove movies** from a wishlist.  
✅ **Explore TV shows** and their details.  
✅ **Switch languages** and adjust content direction.  
✅ **Smooth pagination** for an optimal experience.  



## 🛠️ Technologies Used

 **React (Vite)** Fast and optimized development. 
 **React Query**  Efficient data fetching and caching. 
 **Redux Toolkit** State management made easy.
 **Axios** Seamless API requests. 
 **React Router**  Hassle-free navigation. 
 **CSS Modules** Modular styling for better maintainability. 


## ⚙️ Installation & Setup

Follow these steps to get started:

### 1️⃣ Clone the repository:

git clone https://github.com/HamsEldakrory/Movies-App-react-project.git
cd MovieApp


### 2️⃣ Install dependencies:

npm install

### 3️⃣ Create a `.env` file and add your TMDb API key:

VITE_TMDB_API_KEY=your_api_key_here


### 4️⃣ Start the development server:

npm run dev

## 🔗 API Usage

### 📌 Fetch Now Playing Movies:

https://api.themoviedb.org/3/movie/now_playing?api_key={apiKey}


### 📌 Fetch Movie Details:

https://api.themoviedb.org/3/movie/{id}?api_key={apiKey}


### 📌 Fetch Movie Recommendations:

https://api.themoviedb.org/3/movie/{movie_id}/recommendations?api_key={apiKey}


### 📌 Fetch Movie Reviews:

https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key={apiKey}


### 📌 Search Movies:

https://api.themoviedb.org/3/search/movie?api_key={apiKey}&query={MovieName}


### 📌 Fetch TV Shows:

https://api.themoviedb.org/3/tv/popular?api_key={apiKey}

## 🚀 Deployment
Easily deploy this project using:
- **Vercel**
[Live Demo](https://movies-app-react-project-mocha.vercel.app/)
