import React, { createContext, useContext, useState, useEffect } from 'react';

const LoadingContext = createContext({
  loading: false,
  setLoading: () => {},
});

export function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(false);
  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const { loading, setLoading } = useContext(LoadingContext);
  return [loading, setLoading];
}
