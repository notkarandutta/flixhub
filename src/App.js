import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.js";
import Home from "./components/home.js";
import Aboutpage from "./components/aboutpage.js";
import SearchView from "./components/searchview.js";
import { useState, useEffect } from "react";
import MovieView from "./components/movieview.js";
import Upcoming from './components/upcoming.js';
function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText.trim() === "") {
      setSearchResults([]); // Clear results if the search text is empty
      return;
    }
    const apiKey = "60ba90cc94da017da81c7031fb447e74"; // Replace with your TMDb API key
    const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
      searchText
    )}&include_adult=false&language=en-US&page=1&api_key=${apiKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.results || []); // Update search results with API data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [searchText]);

  return (
    <div className="bg-dark">
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route
          path="/search"
          element={
            <SearchView keyword={searchText} searchResults={searchResults} />
          }
        />
        <Route path="/movies/:id" element={<MovieView />} />
      </Routes>
    </div>
  );
}

export default App;

// api key 60ba90cc94da017da81c7031fb447e74
// api key omdb 62f57c44
// example link https://api.themoviedb.org/3/search/movie?query=star%20wars&include_adult=false&language=en-US&page=1
