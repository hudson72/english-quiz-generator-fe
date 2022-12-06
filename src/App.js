import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import { Navbar } from "./components";

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Router>
      <GlobalStyle />
      <Navbar />
    </Router>
  );
}

export default App;
