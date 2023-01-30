import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import GlobalContext from "./GlobalContext";

// components
import Navbar from "./components/Navbar";

// views
import Home from "./views/Home";
import Pizza from "./views/Pizza";
import Carrito from "./views/Carrito";

function App() {
  const [galeria, setGaleria] = useState([]);
  const globalState = { galeria, setGaleria };

  useEffect(() => {
    getPizzaData();
  }, []);

  async function getPizzaData() {
    const endpoint = "/pizzas.json";
    const res = await fetch(endpoint);
    const data = await res.json()
    setGaleria(data)
  }
  return (
    <div className="App">
      <GlobalContext.Provider value={globalState}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
