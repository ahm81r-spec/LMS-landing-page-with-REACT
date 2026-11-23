import { Button } from "./ui/button";
import { ImageMagnifier } from "../App";

export const aNavBar = {
  className:
    "[&_a]:hidden [&_a]:sm:inline [&_a]:no-underline [&_a]:text-black [&_a]:relative [&_a]:before:content-['']",
  className2:
    "[&_a]:before:absolute [&_a]:before:-bottom-2.5 [&_a]:before:left-0 [&_a]:before:w-0 [&_a]:before:h-0.75 ",
  className3:
    "[&_a]:before:bg-[#898a8b] [&_a]:before:transition-all [&_a]:before:duration-500 [&_a]:hover:before:w-full",
};

export default function Navbar() {
  return (
    <div className="mt-2 px-4">
      <div className="flex justify-between border-b border-[#e5e8eb] mb-12 pb-4 ">
        <div className="flex items-center ml-[2.5%] cursor-pointer">
          <ImageMagnifier
            src={"/public/assets/logo.svg"}
            alt={"logo DibiEdu"}
          />
        </div>
        <div
          className={`flex gap-4 items-center mr-[2.5%] sm:px-0 ${aNavBar.className} ${aNavBar.className2} ${aNavBar.className3}`}
        >
          <a href="#">Home</a>
          <a href="#courses">Courses</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <Button>Sign Up</Button>
        </div>
      </div>
    </div>
  );
}
