import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, useEffect, useState } from 'react';
import Layout from './Layout/Layout';

const App = () => {
  const [data, setData] = useState([]);

  async function fetchData() {
    const data = await import('./../tabs.json');
    setData(data.default);
  }
  useEffect(() => {
    fetchData();
  }, []);

  const sortedData = data.sort((a, b) => a.order - b.order);

  return (
    <Routes>
      <Route path="/" element={<Layout tabs={sortedData} />}>
        <Route index element={<Navigate to={sortedData[0]?.id} />} />
        {sortedData.map(({ path, id }) => (
          <Route
            key={id}
            path={id}
            Component={lazy(() => import(`../components/${path}`))}
          />
        ))}
      </Route>
    </Routes>
  );
};

export default App;
