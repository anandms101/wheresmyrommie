import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ScrollArea } from "@/components/ui/scroll-area";

const formSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(4, { message: "Name is too short" }),
  lastname: z.string().min(4, { message: "Name is too short" }),
  age: z
    .number()
    .int()
    .positive()
    .min(13, { message: "You must be 13 years or older" }),
  bio: z.string().max(300, { message: "Bio is too long" }),
  profilePicture: z.string(),
  occupation: z.string(),
  smokingHabits: z.enum(["Non-smoker", "Occasional", "Smoker"]),
  petOwnership: z.enum(["Pet Owner", "Not a Pet Owner"]),
  cleanliness: z.enum(["Very Clean", "Somewhat Clean", "Not Very Clean"]),
  sleepSchedule: z.enum(["Early Bird", "Night Owl", "Flexible"]),
  desiredMoveInDate: z.date(),
  budget: z.number(),
  location: z.string(),
  interests: z.array(z.string()),
  roomNumber: z.number(),
});

export default function DetailsForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <>
      <div className="w-1/2 flex flex-col mt-8">
        {/* heading */}
        <h1 className="text-4xl font-bold text-center mb-4">Profile</h1>
        {/* form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="First Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Last Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Age" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="bio" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="profilePicture"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="profilePicture" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="occupation"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="occupation" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="smokingHabits"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="smokingHabits" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="petOwnership"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="petOwnership" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cleanliness"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="cleanliness" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sleepSchedule"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="sleepSchedule" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="desiredMoveInDate"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="desiredMoveInDate" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="budget" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="location" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="interests"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="interests" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="roomNumber"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="roomNumber" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              {/* need to add func */}
              <Button variant="outline">Cancel</Button>
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </form>
        </Form>
      </div>
    </>
  );
}
