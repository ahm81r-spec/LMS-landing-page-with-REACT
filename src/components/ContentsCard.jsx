import { contents } from "../App";
import { Card } from "./ui/card";
import { ImageMagnifier } from "../App";

export default function ContentsCard() {
  return (
    <div className="why-dibiedu grid flex-col gap-5">
      <div className="description">
        <h1 className="text-3xl mb-2">
          <strong>Why Choose EduLearn?</strong>
        </h1>
        <p>
          Our platform is designed to provide a seamless and effective learning
          expirience, ensuring you gain the skills you need to succed.
        </p>
      </div>
      <div className="why-dibiedu-container grid-cols-1 sm:grid-cols-3 grid gap-5 ">
        {contents.map((content) => (
          <Card
            key={content.id}
            icon={<ImageMagnifier src={content.icon} alt={content.alt} />}
            title={content.title}
            desc={content.desc}
          />
        ))}
      </div>
    </div>
  );
}
