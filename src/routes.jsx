import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import PizzaSalgada from "./pages/Pizza-Salgada";
import PizzaDoce from "./pages/Pizza-Doce";
import Porcao from "./pages/Porcao";
import Drink from "./pages/Drink";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/pizzas-salgadas' element={<PizzaSalgada/>}/>
        <Route exact path='/pizzas-doces' element={<PizzaDoce/>}/>
        <Route exact path='/porcoes' element={<Porcao/>}/>
        <Route exact path='/drinks' element={<Drink/>}/>
      </Switch>
    </BrowserRouter>
  );
};


export default Routes;