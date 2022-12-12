import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

import App from "./App";

// Scroll to top on navigation wrapper
function Wrapper({ children }) {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
}

ReactDOM.render(
  <Router>
    <Wrapper>
      <App />
    </Wrapper>
  </Router>,
  document.getElementById("root")
);
