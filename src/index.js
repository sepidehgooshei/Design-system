import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/vendor/nucleo/css/nucleo.css"
import "./assets/vendor/font-awesome/css/font-awesome.min.css"
//  import "assets/scss/argon-design-system-react.scss?v1.1.0";
import Index from "./views/Index"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Landing from './views/examples/Landing';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Routes>
  <Route path='/' exact element={<Index/>} />
  <Route path="/landing-page" exact element={<Landing />} />
</Routes>
</BrowserRouter>

);


