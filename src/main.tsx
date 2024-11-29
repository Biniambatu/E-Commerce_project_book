import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import { ScrollToTop } from "./assets/components/Other/ScrollToTop.tsx";
import { FilterProvider } from "./assets/context/FilterContext.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <FilterProvider>
          <ScrollToTop/>
          <App />
        </FilterProvider>  
      </Router>
    </Provider>
  </React.StrictMode>
);



