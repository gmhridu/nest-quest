import React, { createContext, useState } from 'react';

export const DataContext = createContext(null)


const DataProviders = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch("data.json");
    const data = await response.json();
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const dataInfo = {
    data,
    loading,
    setData,
    fetchData,
  };
  return (
    <DataContext.Provider value={dataInfo}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProviders;