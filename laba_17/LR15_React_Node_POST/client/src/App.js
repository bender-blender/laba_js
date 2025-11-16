import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  const sendData = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, age })
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Успешно отправлено!");
      } else {
        setMessage(data.error || "Ошибка");
      }
    } catch {
      setMessage("Сервер недоступен");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>POST запрос</h1>
      <form onSubmit={sendData}>
        <input placeholder="Имя" value={name} onChange={(e)=>setName(e.target.value)} /><br/><br/>
        <input placeholder="Возраст" value={age} onChange={(e)=>setAge(e.target.value)} /><br/><br/>
        <button type="submit">Отправить</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default App;