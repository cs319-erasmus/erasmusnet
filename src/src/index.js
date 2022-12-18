import React from "react";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

// Scroll to top on navigation wrapper
function Wrapper({ children }) {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
}

const root = createRoot(document.getElementById("root"))

root.render(
  <Router>
    <Wrapper>
      <App />
    </Wrapper>
  </Router>
);
