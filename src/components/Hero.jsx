import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="mb-4 relative">
      <img
        src="/public/assets/Unlock your potential.png"
        alt="Unlock your potential"
        className="block w-full h-[clamp(340px,42vw,520px)] object-cover object-center rounded-lg z-100 brightness-[.60]"
      />
      <div className="absolute text-center top-1/2 left-1/2 w-[min(560px,calc(100%-3rem))] -translate-x-1/2 -translate-y-1/2 text-white">
        <h1 className="text-4xl mb-2">Unlock Your Potential with EduLearn</h1>
        <p>
          Embark on a journey of knowledge and skill development with our
          comprehensive online courses. Learn at your own pace, anytime,
          anywhere.
        </p>
        <Button>Start Learning</Button>
      </div>
    </div>
  );
}
