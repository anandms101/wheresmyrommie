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
    // IsUserProfileIsCompleted();
  }, [user, navigate]);

  function navigateToDetailsPage() {
    navigate("/details");
  }

  // check if any user details is missing from mongoDB
  function IsUserProfileIsCompleted() {
    if (!user) {
      return Promise.resolve(false);
    }

    const userEmail = user.primaryEmailAddress.emailAddress;
    console.log("home-page userEmail", userEmail);

    return axios
      .get(`http://localhost:3000/users?q=email=${userEmail}`)
      .then((res) => {
        console.log("home-page res", res.data);

        const requiredFields = [
          "age",
          "bio",
          "profilePicture",
          "occupation",
          "smokingHabits",
          "petOwnership",
          "cleanliness",
          "sleepSchedule",
          "desiredMoveInDate",
          "budget",
          "location",
          "interests",
          "roomNumber",
        ];
        console.log(
          "userProfileCompleted",
          requiredFields.every((field) => res.data[field])
        );
        return requiredFields.every((field) => res.data[field]);
      })
      .catch((err) => {
        console.error("home-page err", err);
        throw err;
      });
  }

  const InCompleteProfile = () => {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <Button onClick={() => navigateToDetailsPage()}>
          Please complete your profile!
        </Button>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <SignedIn>
        {IsUserProfileIsCompleted() === true ? null : <InCompleteProfile />}
      </SignedIn>
    </>
  );
}
