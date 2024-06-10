import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import { ScrollToTop } from "./assets/components/Other/ScrollToTop.tsx";
import { FilterProvider } from "./assets/context/FilterContext.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <FilterProvider>
        <ScrollToTop/>
        <App />
      </FilterProvider>  
    </Router>
  </React.StrictMode>
);
