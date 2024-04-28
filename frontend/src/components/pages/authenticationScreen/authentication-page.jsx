import { SignedIn, SignedOut, useUser } from "@clerk/clerk-react";
import WelcomeScreen from "../welcomeScreen/welcome-page";
import HomePage from "../homeScreen/home-page";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";

const RedirectToHome = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);

  return null;
};

export default function AuthenticationPage() {
  return (
    <>
      <Router>
        <RedirectToHome />
        <Routes>
          <Route
            path="/"
            element={
              <SignedOut>
                <WelcomeScreen />
              </SignedOut>
            }
          />
          <Route
            path="/home"
            element={
              <SignedIn>
                <HomePage />
              </SignedIn>
            }
          />
        </Routes>
      </Router>
    </>
  );
}
