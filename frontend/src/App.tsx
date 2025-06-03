import React, { useEffect } from "react";
import "./App.css";
import Sidebar from "./layouts/Sidebar";
import Main from "./layouts/Main";
import { ActiveLinkProvider } from "./context/ActiveLinkContext";
import { useLocation } from "react-router-dom";

const App: React.FC<{ onAppReady?: () => void }> = ({ onAppReady }) => {
  const location = useLocation();

  useEffect(() => {
    if (onAppReady) onAppReady();

    // Если мы на главной странице
    if (location.pathname === "/") {
      if (location.hash) {
        // Если есть хэш, пытаемся прокрутить к соответствующему элементу
        setTimeout(() => {
          const element = document.getElementById(
            location.hash.replace("#", "")
          );
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          } else {
            // Если элемента нет, прокручиваем в начало страницы
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }, 0);
      } else {
        // Если нет хэша, прокручиваем в начало страницы
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      // Если мы не на главной странице, прокручиваем в начало страницы
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location, onAppReady]);

  return (
    <ActiveLinkProvider>
      <div
        id="home"
        className="container max-w-6xl mx-auto flex pb-4 justify-center"
      >
        <Sidebar />
        <Main />
      </div>
    </ActiveLinkProvider>
  );
};

export default App;
