import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import "./i18n";
import CookieBanner from "./components/CookieBanner";
import Loader from "./components/Loader";

// Добавление классов к body
document.body.className = "bg-[#191C1F] font-tt-firs-neue text-white";

// Компонент-обертка для отслеживания переходов
const PageLoaderWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const minDelayPassed = useRef(false);

  // Минимальное время показа лоадера
  useEffect(() => {
    setLoading(true);
    minDelayPassed.current = false;
    const timer = setTimeout(() => {
      minDelayPassed.current = true;
      setLoading(false);
    }, 600); // например, 600мс
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Скрыть лоадер только если App готов и минимальное время прошло
  const handleAppReady = React.useCallback(() => {
    if (minDelayPassed.current) {
      setLoading(false);
    }
  }, []);

  return (
    <>
      {loading && <Loader />}
      {/* Передаем handleAppReady в App, если нужно */}
      <App onAppReady={handleAppReady} />
      <CookieBanner />
    </>
  );
};

const Root = () => (
  <Router>
    <PageLoaderWrapper children={undefined} />
  </Router>
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<Root />);
