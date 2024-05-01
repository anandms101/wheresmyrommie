import Navbar from "../../navbar";
import { SignedIn, useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DetailsForm from "../detailsform/detailsForm";
import axios from "axios";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const { user } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  function navigateToDetailsPage() {
    navigate("/details");
  }
  
  return (
    <>
      <Navbar />
      <SignedIn>
        <div className="flex flex-col justify-center items-center min-h-screen">
          <Button onClick={() => navigateToDetailsPage()}>Please complete your profile!</Button>
        </div>
      </SignedIn>
    </>
  );
}
