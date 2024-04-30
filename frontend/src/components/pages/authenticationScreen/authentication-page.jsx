import WelcomeScreen from "../welcomeScreen/welcome-page";
import HomePage from "../homeScreen/home-page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFoundPage from "../notfoundScreenF/notFound-page";

export default function AuthenticationPage() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}
