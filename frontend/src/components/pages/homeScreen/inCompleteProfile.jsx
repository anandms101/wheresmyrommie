import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function InCompleteProfile() {

  const navigate = useNavigate();
  
  function navigateToDetailsPage() {
    navigate("/details");
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Button onClick={() => navigateToDetailsPage()}>
        Please complete your profile!
      </Button>
    </div>
  );
}
