import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function CompleteProfile() {
  const { user } = useUser();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getOtherUserInfo();
  }, []);

  function getOtherUserInfo() {
    console.log("home-page card called", user);
    if (!user) {
      return Promise.resolve(false);
    }

    const userEmail = user.primaryEmailAddress.emailAddress;

    axios.get(`http://localhost:3000/users?email=${userEmail}`).then((res) => {
      console.log("home-page card data", res.data);
      setUserData(res.data);
      console.log("userData", res.data);
    });
  }

  const CardComponent = (props) => {
    const user = props.user;
    return (
      <>
        <div className="flex m-4">
          <Card>
            <CardHeader>
              <CardTitle>{user.firstName}</CardTitle>
              <CardDescription>#{user.roomNumber}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{user.occupation}</p>
              <p>{user.age}</p>
              <p>{user.bio}</p>
              <p>{user.smokingHabits}</p>
              <p>{user.petOwnership}</p>
              <p>{user.cleanliness}</p>
              <p>{user.sleepSchedule}</p>
              <p>{user.desiredMoveInDate}</p>
              <p>{user.budget}</p>
              <p>{user.location}</p>
              <p>{user.interests}</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="flex flex-row mt-4">
        {userData &&
          userData.map((user) => {
            console.log("userProp", user);
            return <CardComponent key={user._id} user={user} />;
          })}
      </div>
    </>
  );
}
