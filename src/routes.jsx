import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PizzaSalgada from "./pages/Pizza-Salgada";
import PizzaDoce from "./pages/Pizza-Doce";
import Porcao from "./pages/Porcao";
import Drink from "./pages/Drink";
import NotFound from "./pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/pizzas-salgadas' element={<PizzaSalgada/>}/>
        <Route path='/pizzas-doces' element={<PizzaDoce/>}/>
        <Route path='/porcoes' element={<Porcao/>}/>
        <Route path='/drinks' element={<Drink/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
};


export default Routes;