import "./App.css";
import {
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import WelcomeScreen from "./components/pages/welcomeScreen/welcome-screen";

function App() {
  return (
    <>
      <header>
        <SignedOut>
          {/* <SignInButton /> */}
          {/* <RedirectToSignIn /> */}
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
