import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function CompleteProfile() {
  const { user } = useUser();
  const [usersData, setUsersData] = useState(null);

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
      setUsersData(res.data);
      console.log("userData", res.data);
    });
  }

function mailUser(email){
  if(email)
    window.location.href = `mailto:${email}`;
}
  const CardComponent = (props) => {
    const user = props.user;
    return (
      <>
        <div className="flex w-1/3">
          <AlertDialog>
            <AlertDialogTrigger asChild>
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
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>{user.firstName}</AlertDialogTitle>
                <AlertDialogDescription>
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
                  <p>{user.email}</p>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={mailUser}>Reach Out On Email</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="flex flex-row mt-4 flex-wrap">
        {usersData &&
          usersData.map((user) => {
            console.log("userProp", user);
            return <CardComponent key={user._id} user={user} />;
          })}
      </div>
    </>
  );
}
