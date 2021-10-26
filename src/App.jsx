import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { LoginForm } from "./components/LoginForm";
import { auth } from "./lib/firebase";
import { GlobalStyle } from "./styles/global";

export function App() {
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        const admin = {
          uid: userAuth?.uid,
          email: userAuth?.email,
        };
        console.log(userAuth);
        setAdmin(admin);
      } else {
        setAdmin(null);
      }
    });
    return unsubscribe;
  }, []);

  console.log("admin data:", admin?.uid);
  return (
    <>
      <Router>
        <Header />
        {admin ? <Dashboard admin={admin} /> : <LoginForm />}
        <GlobalStyle />
      </Router>
    </>
  );
}
