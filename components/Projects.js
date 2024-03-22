import userData from "@constants/data";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section>
      <div className="max-w-6xl mx-auto h-20">
        <h1 className="font-title text-5xl md:text-7xl font-bold my-8 text-center text-gray-900 dark:text-gray-50 ">
          Projects
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 p-14 lg:p-20">
        {userData.projects.map((proj, idx) => (
          <ProjectCard
            title={proj.title}
            link={proj.link}
            github={proj.github}
            imgUrl={proj.imgUrl}
            number={`${idx + 1}`}
            desc={proj.description}
            key={idx}
          />
        ))}
      </div>
    </section>
  );
}

const ProjectCard = ({ title, link, github, imgUrl, desc, number }) => {
  return (
    <div className="rounded-2xl max-w-sm">
      <Link
        href={link}
        target={title === "Portfolio" ? "_self" : "_blank"}
        rel="noopener noreferrer"
        className="w-full block drop-shadow-3xl"
      >
        <div className="relative overflow-hidden rounded-2xl">
          <div className="h-72 object-cover">
            <Image
              src={imgUrl}
              width={500}
              height={500}
              alt="portfolio"
              className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
            />
          </div>
          <h2 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-gray-900 hover:bg-gray-500 rounded-md px-2">
            <a href={github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </h2>
          <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl bg-gray-900 rounded-md px-2">
            {number.length === 1 ? "0" + number : number}
          </h1>
        </div>
      </Link>
      <div className="p-6">
        <h2 className="text-xl font-medium mb-2">{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  )
};
