import Navbar from "../../navbar";
import { SignedIn, useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DetailsForm from "../detailsform/detailsForm";
import axios from "axios";

export default function HomePage() {
  const { user } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  
  return (
    <>
      <Navbar />
      <SignedIn>
        <div className="flex flex-col justify-center items-center min-h-screen">
          <DetailsForm />
        </div>
      </SignedIn>
    </>
  );
}
