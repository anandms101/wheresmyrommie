import { SignInButton } from "@clerk/clerk-react";
import TypewriterString from "./typewritter";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../../mode-toggle";

export default function WelcomeScreen() {
  return (
    <>
      <span className="flex flex-col min-h-screen items-center justify-center">
        <span
          className="lowercase font-welcomeheading text-5xl font-bold"
        >
          where&apos;s my{" "}
          <span
            className="underline"
          >
            roommie
          </span>
          ?
        </span>
        <TypewriterString />
        <ModeToggle />
        <SignInButton>
          <Button
            className="font-button text-lg"
          >
            Sign In
          </Button>
        </SignInButton>
      </span>
    </>
  );
}
