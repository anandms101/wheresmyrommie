import Typewriter from "typewriter-effect";

export default function TypewriterString() {
  return (
    <>  <span className="font-welcomeheading text-xl my-4">
        <Typewriter 
          options={{
            strings: ["a roommie", "a new friend, maybe?", ""],
            autoStart: true,
            loop: true,
          }}
        />
        </span>
    </>
  );
}
