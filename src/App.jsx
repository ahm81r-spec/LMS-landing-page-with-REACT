import ContentsCard from "./components/ContentsCard";
import CoursesCard from "./components/CoursesCard";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { useState } from "react";

export const contents = [
  {
    id: 1,
    icon: "/public/assets/book.svg",
    alt: "book icon",
    title: "Online Material",
    desc: "Acces a vast library of high-quality learning materials,including videos, articles, and interactive content.",
  },
  {
    id: 2,
    icon: "/public/assets/sheet.svg",
    alt: "paper sheet icon",
    title: "Quizzes & Assignments",
    desc: "Test your knowledge and reinforce your learning with engaging quizzes and practical assignments.",
  },
  {
    id: 3,
    icon: "/public/assets/certificate.svg",
    alt: "certificate icon",
    title: "Certificates",
    desc: "Earn certificates upon complition of courses,showcasing your achievements and enhhancing your credentials.",
  },
];

export const courses = [
  {
    id: 1,
    img: "/public/assets/html.jpg",
    alt: "Web Development Fundamentals Poster",
    title: "Web Development Fundamentals",
    desc: "Learn the basics of HTML, CSS, and JavaScript to build your first website.",
  },
  {
    id: 2,
    img: "/public/assets/Javascript.svg",
    alt: "Advanced JavaScript Techniques Poster",
    title: "Advanced JavaScript Techniques",
    desc: "Dive deep into JavaScript concepts like asynchronous programming, closures, and ES6 features.",
  },
  {
    id: 3,
    img: "/public/assets/responsive.svg",
    alt: "Responsive Design Mastery Poster",
    title: "Responsive Design Mastery",
    desc: "Master the art of creating websites that adapt to different screen sizes and devices.",
  },
];

export function ImageMagnifier({ src, alt, zoomLevel = 2 }) {
  const [isHovered, setIsHovered] = useState(false);
  const [origin, setOrigin] = useState("50% 50%");

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setOrigin(`${x}% ${y}%`);
  };

  return (
    <div
      style={{
        cursor: "zoom-in",
        borderRadius: "8px",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <img
        src={src}
        alt={alt}
        style={{
          transformOrigin: origin,
          transform: isHovered ? `scale(${zoomLevel})` : "scale(1)",
          transition: isHovered ? "none" : "transform 0.2s ease-out",
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col justify-around w-full max-w-[65em] mx-auto px-4">
        <Hero />
        <ContentsCard />
        <CoursesCard />
      </main>
      <Footer />
    </>
  );
}
