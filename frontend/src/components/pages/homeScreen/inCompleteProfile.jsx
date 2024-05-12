import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

export default function InCompleteProfile() {

  const navigate = useNavigate();

  const { user } = useUser();

  function navigateToDetailsPage() {
    navigate("/details");
  }

  function getOtherUserInfo(){
    if(!user){
        return Promise.resolve(false);  
    }

    const userEmail = user.primaryEmailAddress.emailAddress;

    return axios.get(`http://localhost:3000/users?email!=${userEmail}`)
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Button onClick={() => navigateToDetailsPage()}>
        Please complete your profile!
      </Button>
    </div>
  );
}
