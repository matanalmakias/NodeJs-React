import { Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Home from "../../pages/Home/Home";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
};

export default Router;
