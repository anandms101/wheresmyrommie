import Navbar from "../../navbar";
import { SignedIn, useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

import CompleteProfile from "./completeProfile";
import InCompleteProfile from "./inCompleteProfile";

export default function HomePage() {
  const { user } = useUser();
  const navigate = useNavigate();

  const [isProfileCompleted, setIsProfileCompleted] = useState(false);  

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  useEffect(() => {
    IsUserProfileIsCompleted().then(setIsProfileCompleted);
  }, []);

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

  return (
    <>
      <Navbar />
      <SignedIn>
        { isProfileCompleted ? <CompleteProfile /> : <InCompleteProfile />}
      </SignedIn>
    </>
  );
}
