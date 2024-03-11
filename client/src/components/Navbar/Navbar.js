import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppBar, Toolbar, Typography, Avatar, Button } from "@material-ui/core";

import { jwtDecode } from "jwt-decode";

import useStyles from "./styles";
import memoriesText from "../../images/memoriesText.png";
import memoriesLogo from "../../images/memoriesLogo.png";

const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: "LOGOUT" });

    navigate("/");

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;
  
    if (token) {
      const decodedToken = jwtDecode(token);
  
      // Tokenin son kullanma tarihi geçmişse
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        // Kullanıcıyı logout et
        logout();
      }
    }
  
    // useEffect'te localStorage'dan kullanıcı profili ayarlanırken koşula dahil edilmeli
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]); // Eğer location değişirse useEffect yeniden çalışır
  

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">

      <Link to={'/'} className={classes.brandContainer}>
      <img
          className={classes.image}
          src={memoriesText}
          alt="memories"
          height="60"
        />
        <img
          className={classes.image}
          src={memoriesLogo}
          alt="memories"
          height="60"
        />
      </Link>


      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.picture}
            >
              {user?.result?.name && user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button
              className={classes.logout}
              onClick={logout}
              variant="contained"
              color="secondary"
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
