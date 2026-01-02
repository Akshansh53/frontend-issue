"use client";
import { motion } from "framer-motion";

export default function MediaMarquee() {
  const medias = [
    {
      name: "New York Weekly",
      link: "https://i0.wp.com/douglasrobbinsauthor.com/storage/2024/01/NY-Weekly.jpg?resize=1024%2C683&ssl=1"
    },
    {
      name: "US Insider",
      link: "https://cdn.prod.website-files.com/65e83cfcbcd7f076562b441a/65effeeee19c88e19a4de1ef_US%20Insider.png"
    },
    {
      name: "Indian Bulletin",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjFJhiay9cZPk2CSgS_ruRNcTmpXX3kd5guw&s"
    },
    {
      name: "Daily Hunt",
      link: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Daily_hunt.png"
    },
    {
      name: "News 24",
      link: "https://upload.wikimedia.org/wikipedia/commons/6/66/News24_Logo.jpg"
    },
    {
      name: "News Nation",
      link: "https://play-lh.googleusercontent.com/l01NEnkNP-IjuNmaXMawC4Cy-ikJ5iIDlcRLCukd0ABEVnltCeIft-0HYiF69HfprvdV=w526-h296-rw"
    },
    {
      name: "Flipboard",
      link: "https://cdn.flipboard.com/wp-content/uploads/sites/17/2015/02/red-horizontal-379x262.png"
    },
    {
      name: "Republic",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtBIe5NZxqZnWJNJz8ae9UPDpN1rSd7o-6Kw&s"
    },
    {
      name: "Business Standard",
      link: "https://www.speakin.co/edit/wp-content/uploads/2019/05/business-standard-logo-2.png"
    }
  ];

  return (
    <div className="bg-amber-300 py-16 h-screen flex justify-center items-center">
      <div className="bg-white py-10 overflow-hidden">
        <h2 className=" font-sans text-center text-[8vw] xl:text-[4vw] md:text-[6vw] sm:text-[8vw] text-[#0B1C2E] font-extrabold text-4xl mb-10">
          Credibility & Trust
        </h2>

       
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-16 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear"
            }}
          >
            {[...medias, ...medias].map((media, index) => (
              <img
                key={index}
                src={media.link}
                alt={media.name}
                className="h-[19vw] md:h-[12vw] sm:h-[14vw] object-contain"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
