import { useEffect, useState } from "react";

function App() {
  const [backendData, setBackendData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => {
        if (!res.ok) throw new Error("Ошибка сети");
        return res.json();
      })
      .then((data) => {
        setBackendData(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Сервер недоступен");
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Данные с сервера</h1>
      {loading && <p>Загрузка...</p>}
      {error && <p style={{color:'red'}}>{error}</p>}
      {backendData && backendData.map(u=>(
        <div key={u.id}>{u.name} - {u.age}</div>
      ))}
    </div>
  );
}

export default App;