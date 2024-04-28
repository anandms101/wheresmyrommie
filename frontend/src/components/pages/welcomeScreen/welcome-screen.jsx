import { SignInButton } from "@clerk/clerk-react";
import TypewriterString from "./typewritter";
import { Button } from "@/components/ui/button";
import Navbar from "../../navbar";

export default function WelcomeScreen() {
  return (
    <>
      <Navbar />
      <span className="flex flex-col min-h-screen items-center justify-center">
        <span style={{color: "#49243E"}}
          className="lowercase font-welcomeheading text-5xl font-bold"
        >
          where&apos;s my{" "}
          <span style={{textDecorationColor: "#BB8493"}}
            className="underline"
          >
            roommie
          </span>
          ?
        </span>
        <TypewriterString />
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
