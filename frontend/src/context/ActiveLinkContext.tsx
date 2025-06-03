// src/context/ActiveLinkContext.tsx
import React, { createContext, useContext, useState, ReactNode, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

interface ActiveLinkContextProps {
  activeLink: string;
  setActiveLink: (link: string) => void;
}

const ActiveLinkContext = createContext<ActiveLinkContextProps | undefined>(undefined);

export const ActiveLinkProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const isClient = typeof window !== 'undefined';
  const getInitialHash = () => (isClient && window.location.hash) ? window.location.hash : '#home';
  const [activeLink, setActiveLink] = useState<string>(getInitialHash());
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setActiveLink(location.hash);
    } else if (location.pathname === '/') {
      setActiveLink('#home');
    }
  }, [location.hash, location.pathname]);

  useEffect(() => {
    if (!isClient) return;
    const onHashChange = () => setActiveLink(window.location.hash || '#home');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({ activeLink, setActiveLink }), [activeLink, setActiveLink]);

  return (
    <ActiveLinkContext.Provider value={contextValue}>
      {children}
    </ActiveLinkContext.Provider>
  );
};

export const useActiveLink = () => {
  const context = useContext(ActiveLinkContext);
  if (!context) {
    throw new Error('useActiveLink must be used within an ActiveLinkProvider');
  }
  return context;
};