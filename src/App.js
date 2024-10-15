import "./App.css";
import React from "react";
import HeaderBar from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./routes/Login";
import Home from "./routes/Home";
import { SignUp } from "./routes/Login";

function Memoire() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <div className="container">
          <Routes>
            <Route path="/" element={<></>} />
            <Route
              path="/login"
              element={<Login setLoggedIn={setLoggedIn} />}
            />
            <Route
              path="/signup"
              element={<SignUp setLoggedIn={setLoggedIn} />}
            />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Memoire;
