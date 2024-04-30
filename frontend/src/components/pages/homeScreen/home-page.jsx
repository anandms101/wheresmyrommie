import Navbar from "../../navbar";
import { SingedIn, useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
      <SingedIn></SingedIn>
    </>
  );
}
