import { render } from "react-dom";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './index.css';

import App from "./App";
//import States from "./routes/states";
//import State from "./routes/state";
import NewSouthWales from "./routes/NewSouthWales";
import Queensland from "./routes/Queensland";
import SouthAustralia from "./routes/SouthAustralia";
import Tasmania from "./routes/Tasmania";
import Victoria from "./routes/Victoria";
import WesternAustralia from "./routes/WesternAustralia";
import {DarkMode} from "./DarkMode";

const rootElement = document.getElementById("root");
render(
  
  <BrowserRouter>
  <DarkMode>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="NewSouthWales" element={<NewSouthWales />} />
      <Route path="Queensland" element={<Queensland />} />
      <Route path="SouthAustralia" element={<SouthAustralia />} />
      <Route path="Tasmania" element={<Tasmania />} />
      <Route path="Victoria" element={<Victoria />} />
      <Route path="WesternAustralia" element={<WesternAustralia />} />
    </Routes>
    </DarkMode>
  </BrowserRouter>,
  
  rootElement
);


