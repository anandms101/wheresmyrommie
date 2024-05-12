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
      console.log("userData", userData);
    });
  }

  const CardComponent = (props) => {
    return (
      <>
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </>
    );
  };

  return (
    <>
      {userData &&
        userData.map((user) => <CardComponent key={user._id} user={user} />)}
    </>
  );
}
