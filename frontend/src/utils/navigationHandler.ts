// src/utils/navigationHandler.ts
import { useNavigate } from "react-router-dom";
import { useActiveLink } from "../context/ActiveLinkContext";

export const useNavigationHandler = () => {
  const { setActiveLink } = useActiveLink();
  const navigate = useNavigate();

  const handleNavigation = (href: string) => {
    setActiveLink(href);
    if (href.startsWith("#")) {
      if (window.location.pathname !== "/") {
        // Переходим на главную страницу с хэшем
        navigate(`/${href}`, { replace: true });
      } else {
        // Мы уже на главной странице, просто обновляем хэш
        window.location.hash = href;
      }
    } else {
      // Переход на другую страницу, очищаем хэш
      navigate(href);
    }
  };

  return { handleNavigation };
};
