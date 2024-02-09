import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import { GoogleOAuthProvider } from '@react-oauth/google'

const App = () => {
  return (
    <GoogleOAuthProvider clientId="673520078178-jved4m4j34nkggqqu6c1vbjiudnk67rs.apps.googleusercontent.com">
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Container>
    </GoogleOAuthProvider>
  );
};

export default App;
