import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ProjectProps } from "./projectDetails";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedBody from "../animations/AnimatedBody";
import { motion } from "framer-motion";

const ProjectCard = ({
  id,
  name,
  description,
  technologies,
  github,
  demo,
  image,
  available,
}: ProjectProps) => {
  return (
    <motion.div
      style={
        {
          backgroundColor: "#212531",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          position: "relative",
        } as React.CSSProperties
      }
      className={`relative z-10 min-h-[500px] w-full items-stretch justify-center overflow-hidden rounded-3xl bg-center py-6 sm:min-h-[600px] sm:w-[100%] md:min-h-[550px] md:w-[100%] lg:min-h-[480px] lg:py-8`}
      initial="initial"
      animate="animate"
    >
      <Image
  src={image}
  alt={name}
  className={`absolute bottom-2 w-[45%] sm:w-[28%] md:w-[40%] lg:w-[35%] xl:w-[30%] object-contain right-2 sm:right-4`}
/>

      <div
        className={`absolute top-0 text-[#0E1016] ${
          id % 2 === 0 ? "left-0 ml-6 lg:ml-10" : "right-0 mr-6 lg:mr-10"
        } mt-4 flex items-center justify-center gap-4 lg:mt-6 z-20`}
      >
        {available ? (
          <div className="flex items-center justify-center gap-4">
            <Link
              href={github}
              target="_blank"
              className="rounded-full"
              aria-label="Open GitHub Repository"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="w-[18px] rounded-full bg-white p-4 text-[18px] md:w-[22px] md:p-5 md:text-[22px] lg:w-[24px] lg:text-[24px]"
                data-blobity
                data-blobity-radius="38"
                data-blobity-offset-x="4"
                data-blobity-offset-y="4"
                data-blobity-magnetic="true"
              />
            </Link>
            <Link href={demo} target="_blank" aria-label="Open Live Demo">
              <FontAwesomeIcon
                icon={faLink}
                className="w-[18px] rounded-full bg-white p-4 text-[18px] md:w-[22px] md:p-5 md:text-[22px] lg:w-[24px] lg:text-[24px]"
                data-blobity
                data-blobity-radius="38"
                data-blobity-offset-x="4"
                data-blobity-offset-y="4"
                data-blobity-magnetic="trues"
              />
            </Link>
          </div>
        ) : (
          <div className=" flex items-center justify-center gap-4">
            <Link
              href={github}
              target="_blank"
              className="mt-1 rounded-full"
              aria-label="Open GitHub Repository"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="w-[18px] rounded-full bg-white p-4 text-[18px] md:w-[22px] md:p-5 md:text-[22px] lg:w-[24px] lg:text-[24px]"
                data-blobity
                data-blobity-radius="38"
                data-blobity-offset-x="4"
                data-blobity-offset-y="4"
                data-blobity-magnetic="true"
              />
            </Link>
            <div className="rounded-xl bg-white px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-3">
              <h3 className="text-[14px] md:text-[16px] lg:text-[18px]">
                Coming soon
              </h3>
            </div>
          </div>
        )}
      </div>
      <div
        className={`absolute text-white z-10 left-6 top-32 lg:left-10 md:top-36 lg:top-40 mb-4 max-w-[50%] sm:max-w-[65%] md:max-w-[50%] lg:max-w-[55%]`}
      >
        <AnimatedTitle
          text={name}
          className={
            "text-[32px] leading-tight text-white sm:text-[36px] sm:leading-tight md:text-[40px] md:leading-tight lg:text-[44px] lg:leading-tight xl:text-[48px] xl:leading-tight"
          }
          wordSpace={"mr-[0.25em]"}
          charSpace={"-mr-[0.01em]"}
        />
        <AnimatedBody
          text={description}
          className={
            "mt-3 text-[16px] font-medium text-[#95979D] sm:text-[17px] md:text-[18px] lg:mt-4 lg:text-[18px] line-clamp-4"
          }
        />
        <div className="mt-6 flex flex-wrap gap-2 lg:gap-3">
          {technologies.map((tech, id) => (
            <AnimatedTitle
              text={tech}
              wordSpace={"mr-[0.25em]"}
              charSpace={"mr-[0.01em]"}
              key={id}
              className={
                "text-[14px] font-bold uppercase sm:text-[15px] md:text-[16px] lg:text-[17px] opacity-90"
              }
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
