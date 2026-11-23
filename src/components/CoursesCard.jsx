import { courses } from "../App";
import { Card2 } from "./ui/card";
import { Button2 } from "./ui/button";
import { ImageMagnifier } from "../App";

export default function CoursesCard() {
  return (
    <div className="courses flex flex-col items-stretch gap-5" id="courses">
      <h2 className="mt-2 text-2xl font-weight: 900">Featured Courses</h2>
      <div className="course-container grid grid-cols-1 sm:grid-cols-3  gap-5 overflow-hidden">
        {courses.map((course) => (
          <Card2
            key={course.id}
            img={<ImageMagnifier src={course.img} alt={course.alt} />}
            title={course.title}
            desc={course.desc}
          />
        ))}
      </div>
      <Button2>View All Courses</Button2>
    </div>
  );
}
