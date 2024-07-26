
import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

const page = () => {
  return (
    <section className="flex w-full h-[100dvh] m-0">
      <div className="h-[100dvh] w-[50%]">
        <img
          alt="image"
          src="/bg1.jpg"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="w-[50%] flex items-center justify-center h-[100dvh]">
      <SignIn />
      </div>
    </section>
  );
};

export default page;

 