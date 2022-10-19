import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PizzaSalgada from "./pages/Pizza-Salgada";
import PizzaDoce from "./pages/Pizza-Doce";
import Porcao from "./pages/Porcao";
import Drink from "./pages/Drink";
// import NotFound from "./pages/404";


function App(){
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Home/>} />
        <Route path='/pizzas-salgadas' element={<PizzaSalgada/>}/>
        <Route path='/pizzas-doces' element={<PizzaDoce/>}/>
        <Route path='/porcoes' element={<Porcao/>}/>
        <Route path='/drinks' element={<Drink/>}/>
        <Route path='*' element={<NotFound404/>}/>

      </Routes>
    </BrowserRouter>
  );
};

function NotFound404() {
  return (
    <div>
      <Header />

      <div id="container-notfound">
        <div id="container-image">
          <img id="image-404" src="/assets/not-found/404.png" alt="Erro 404" />
        </div>

        <h1 id="text-notfound">Page Not Found!</h1>
      </div>

      <Footer />
    </div>
  );
};

export default App;