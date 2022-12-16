import React from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export const useAuth = () => {
  return React.useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const api = "http://18.185.6.57:3333";

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    return auth.signOut();
  };

  const signup = (first, last, email, password) => {
    const res = fetch(api + "/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        displayName: first + " " + last,
        email: email,
        password: password,
        role: "student",
      }),
    });
    console.log(res);
    return res;
  };

  // Observer pattern
  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(JSON.parse(JSON.stringify(user)));
        setLoading(false);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  const value = { user, login, logout, signup };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
