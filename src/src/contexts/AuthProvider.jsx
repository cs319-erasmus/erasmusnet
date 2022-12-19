import React from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext();

export const useAuth = () => {
  return React.useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const API = process.env.REACT_APP_API_URL;

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const signup = (first, last, email, password) => {
    const res = fetch(API + "/auth/signup", {
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
  const getToken = async () => {
    try {
      return await auth.currentUser.getIdToken();
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const getUser = () => {
    try {
      return auth.currentUser;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  // Observer pattern
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setUser(JSON.parse(JSON.stringify(user)));
        setLoading(false);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  const value = { user, login, logout, signup, getToken, getUser };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
