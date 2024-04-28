import { SignInButton } from "@clerk/clerk-react";
import TypewriterString from "./typewritter";
import { Button } from "@/components/ui/button";

export default function WelcomeScreen() {
  return (
    <>
      <span className="flex flex-col min-h-screen items-center justify-center">
        <span className="font-welcomeheading text-5xl font-bold">Where&apos;s My Roommie?</span>
        <TypewriterString />
        <SignInButton>
          <Button className="font-button text-lg">Sign In</Button>
        </SignInButton>
      </span>
    </>
  );
}
