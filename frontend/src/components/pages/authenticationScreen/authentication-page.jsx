import {
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import WelcomeScreen from "../welcomeScreen/welcome-page";
import HomePage from "../homeScreen/home-page";

export default function AuthenticationPage() {
  return (
    <>
      <header>
        <SignedOut>
          <WelcomeScreen />
        </SignedOut>
        <SignedIn>
          <HomePage />
        </SignedIn>
      </header>
    </>
  );
}

