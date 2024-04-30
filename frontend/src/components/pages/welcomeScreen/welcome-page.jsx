import { SignedOut, SignInButton, useUser } from "@clerk/clerk-react";
import TypewriterString from "./typewritter";
import { Button } from "@/components/ui/button";
import Navbar from "../../navbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function WelcomeScreen() {
  
  const { user } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);

  return (
    <>
      <Navbar />
      <SignedOut>
        <span className="flex flex-col min-h-screen items-center justify-center">
          <span
            style={{ color: "#49243E" }}
            className="lowercase font-welcomeheading text-5xl font-bold"
          >
            where&apos;s my{" "}
            <span
              style={{ textDecorationColor: "#BB8493" }}
              className="underline"
            >
              roommie
            </span>
            ?
          </span>
          <TypewriterString />
          <SignInButton mode="modal" afterSignInUrl="/home">
            <Button className="font-button text-lg">
              Let&apos;s get started!
            </Button>
          </SignInButton>
        </span>
      </SignedOut>
    </>
  );
}
