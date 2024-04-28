import "./App.css";
import {
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";
import WelcomeScreen from "./components/pages/welcomeScreen/welcome-screen";

function App() {
  return (
    <>
      <header>
        <SignedOut>
          <WelcomeScreen />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
    </>
  );
}

export default App;
