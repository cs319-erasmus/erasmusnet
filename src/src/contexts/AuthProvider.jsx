import React from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext();

export const useAuth = () => {
  return React.useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null); // null: loading, undefined: not logged in
  const [loading, setLoading] = React.useState(true);
  const [role, setRole] = React.useState(undefined);
  const API = process.env.REACT_APP_API_URL;

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    try {
      const res = await signOut(auth);
      setUser(undefined);
      return res;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const signup = (first, last, email, password) => {
    console.log(API);
    const res = fetch(API, {
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
      return await auth?.currentUser?.getIdToken();
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const getUser = () => {
    try {
      return user;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const getRole = () => {
    try {
      return role;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  // Observer pattern
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const setDetailedUser = async () => {
          const userRole = await user.getIdTokenResult().then((idTokenResult) => { return idTokenResult.claims.role;});
          setUser(() => ({ ...JSON.parse(JSON.stringify(user)),  role: userRole}));
          setLoading(false);
        };
        setDetailedUser();
      } else {
        setUser(undefined);
      }
    });
    return unsubscribe;
  }, []);

  const value = { user, login, logout, signup, getToken, getUser, getRole };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
