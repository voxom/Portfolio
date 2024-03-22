import { RoughNotationGroup } from "react-rough-notation";
import { Highlight } from "./Highlight";
import Link from "next/dist/client/link";

export default function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6", "#bfa16d"];
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      {/* Text container */}

      <div className="font-title w-2/3 mx-auto text-4xl md:text-7xl font-bold text-center py-12 lg:p-10">
        Hi, I&apos;m Chad.
        <div className="">
          <RoughNotationGroup show={true}>
            <Highlight color={colors[4]}>
              <h1 className="text-white dark:text-gray-900 py-3 my-10">
                The Journey Begins Here.
              </h1>
            </Highlight>
          </RoughNotationGroup>
        </div>
        <Link
          href="/projects"
          className="text-xl font-normal ring ring-[#614828] hover:ring-[#be9259] rounded p-3"
        >
          Projects
        </Link>
      </div>
    </div>
  )
}
