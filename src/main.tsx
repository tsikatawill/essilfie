import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { SettingsPage } from "./pages/settings";
import AboutUs from "./pages/about-us";
import Dashboard from "./pages/dashboard";
import { Points } from "./pages/points";
import { Locations } from "./pages/locations";
import { Products } from "./pages/products";
import { routes } from "./utils/routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<App />} />
        <Route path={routes.settings} element={<SettingsPage />} />
        <Route path={routes.about} element={<AboutUs />} />
        <Route path={routes.dashboard} element={<Dashboard />}>
          <Route path={routes.points} element={<Points />} />
          <Route path={routes.products} element={<Products />} />
          <Route path={routes.locations} element={<Locations />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
