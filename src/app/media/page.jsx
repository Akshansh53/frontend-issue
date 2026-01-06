"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MediaMarquee() {
  const medias = [
    {
      name: "New York Weekly",
      link: "/media-images/NY-Weekly.jpeg",
    },
    {
      name: "US Insider",
      link: "/media-images/US-Insider.jpeg",
    },
    {
      name: "Indian Bulletin",
      link: "/media-images/Indian-Bulletin.jpeg",
    },
    {
      name: "Daily Hunt",
      link: "/media-images/Dailyhunt.jpeg",
    },
    {
      name: "News 24",
      link: "/media-images/News24.jpeg",
    },
    {
      name: "News Nation",
      link: "/media-images/News-Nation.jpeg",
    },
    {
      name: "Flipboard",
      link: "/media-images/Flipboard.jpeg",
    },
    {
      name: "Republic",
      link: "/media-images/Republic.jpeg",
    },
    {
      name: "Business Standard",
      link: "/media-images/Business-standard.jpeg",
    },
  ];

  return (
    <div className="bg-amber-300 py-16 h-screen flex justify-center items-center">
      <div className="bg-white py-10 overflow-hidden">
        <h2 className=" font-sans text-center text-[8vw] xl:text-[4vw] md:text-[6vw] sm:text-[8vw] text-[#0B1C2E] font-extrabold text-4xl mb-10">
          Credibility & Trust
        </h2>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex  w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            }}
          >
            {[...medias, ...medias].map((media, index) => (
              <Image
                key={index}
                src={media.link}
                alt={media.name}
                width={150}
                height={50}
                className="h-[19vw] mx-4 md:h-[12vw] sm:h-[14vw] object-contain"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
