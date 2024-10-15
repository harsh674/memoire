import React from "react";
import "./index.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const HeaderBar = ({ loggedIn, setLoggedIn }) => {
  return (
    <header className="header-bar">
      <div className="logo">
        <h1>Memoire</h1>
        <div>
          {!loggedIn ? (
            <Link to="/login">
              <Button variant="outlined" className="primaryButton">
                Log in
              </Button>
            </Link>
          ) : (
            <Link to="/">
              <Button
                variant="outlined"
                className="primaryButton"
                onClick={() => setLoggedIn(false)}
              >
                Log Out
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderBar;
