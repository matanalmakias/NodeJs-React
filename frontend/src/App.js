import logo from "./logo.svg";
import { useEffect } from "react";
import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Router from "./components/Router/Router";

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
  return (
    <>
      <Header />
      <Footer />

      <Router />
    </>
  );
}

export default App;
