import logo from "./logo.svg";
import { useEffect } from "react";
import "./App.css";

function App() {
  const url = `http://localhost:3001/api/auth/signin`;

  useEffect(() => {
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "Matan@gmail.com",
        password: "aaAA11@@",
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      })
      .catch((e) => console.log(e));
  }, []);
  return <></>;
}

export default App;
