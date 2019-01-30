import { useState, useEffect } from 'react';

const useFetch = (url, initialData) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(initialData);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setData(data);
        } else {
          setError(new Error(response.statusText));
        }
      } catch (e) {
        setError(e);
      }

      setLoading(false);
    })();
  }, [url]);

  return { error, loading, data };
};

const useLocalStorage = (key, initialValue) => {
  const [item, setInnerValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = value => {
    setInnerValue(value);
    window.localStorage.setItem(key, JSON.stringify(item));
  };

  return [item, setValue];
};

export { useFetch, useLocalStorage };
