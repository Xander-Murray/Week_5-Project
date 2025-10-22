import { useState, useEffect } from "react";
import CatCard from "./components/CatCard";
import BanList from "./components/BanList";
import "./App.css";

const API_URL =
  "https://api.thecatapi.com/v1/images/search?has_breeds=1&order=RANDOM";

export default function App() {
  const [cat, setCat] = useState(null);
  const [banList, setBanList] = useState([]);
  const API_KEY = import.meta.env.VITE_CAT_API_KEY;

  async function fetchCat() {
    try {
      const res = await fetch(API_URL, {
        headers: {
          "x-api-key": API_KEY,
        },
      });
      const data = await res.json();
      const newCat = data[0];
      const breed = newCat?.breeds?.[0];
      if (!breed) return fetchCat();

      // Skip banned cats by breed or origin
      if (
        banList.some((b) => b.name === breed.name || b.origin === breed.origin)
      ) {
        console.log("Skipped banned cat:", breed.name);
        return fetchCat();
      }

      setCat(newCat);
    } catch (err) {
      console.error("Error fetching cat:", err);
    }
  }

  function banCat(catToBan) {
    const breed = catToBan?.breeds?.[0];
    if (!breed) return;
    const banItem = {
      name: breed.name,
      origin: breed.origin,
      image: catToBan.url,
    };

    setBanList((prev) => {
      if (prev.some((b) => b.name === banItem.name)) return prev;
      return [...prev, banItem];
    });
  }

  function removeBan(breedName) {
    setBanList((prev) => prev.filter((b) => b.name !== breedName));
  }

  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <div className="App">
      <h1>🐱 Veni Vici – Discover Cats!</h1>

      {cat && <CatCard cat={cat} />}

      <div className="buttons">
        <button className="discover-btn" onClick={fetchCat}>
          Discover New Cat
        </button>
        <button className="ban-btn" onClick={() => banCat(cat)}>
          🚫 Ban This Cat
        </button>
      </div>

      <BanList banList={banList} removeBan={removeBan} />
    </div>
  );
}
