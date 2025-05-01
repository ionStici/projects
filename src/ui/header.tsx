import { AtSign, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export function Header() {
  return (
    <header className="pt-16 sm:pt-20 mb-20 sm:mb-28">
      <SocialLink />
      <HeaderTitle />
    </header>
  );
}

function HeaderTitle() {
  return (
    <div className="flex items-center justify-center flex-col gap-5 sm:gap-6">
      <motion.h1
        initial={{ x: "-2000px", opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1], // Custom easing for more natural motion
          scale: { duration: 0.4 },
        }}
        className="text-white text-6xl font-bold"
      >
        Ion Stici's Web Work
      </motion.h1>
      <motion.p
        initial={{ x: "2000px", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.2, // Slight delay after title
        }}
        className="w-full sm:w-fit text-blue-100 text-lg font-normal bg-blue-400/75 px-3 py-1 rounded-md"
      >
        Browse My Portfolio of Full-Cycle Web Solutions
      </motion.p>
    </div>
  );
}

function SocialLink() {
  const socialLinks = [
    { icon: Github, href: "" },
    { icon: AtSign, href: "" },
    { icon: Linkedin, href: "" },
    { icon: Twitter, href: "" },
    { icon: Instagram, href: "" },
  ];

  return (
    <motion.div
      initial={{ y: "-1500px", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.4, // Reduced duration to allow staggered animation to be visible
        ease: [0.16, 1, 0.3, 1],
      }}
      className="w-fit sm:mx-auto flex items-center justify-start sm:justify-center 
      gap-2 px-3 py-1 
      mb-4 sm:mb-6
      border border-blue-400/95 rounded-xl shadow-inner shadow-blue-600/75"
    >
      <motion.div
        className="flex gap-2"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.2, // Added delay to start after container slides in
            },
          },
        }}
        initial="hidden"
        animate="show"
      >
        {socialLinks.map(({ icon: Icon, href }, index) => (
          <motion.a
            key={index}
            href={href}
            variants={{
              hidden: { scale: 0, opacity: 0 },
              show: {
                scale: 1,
                opacity: 1,
                transition: {
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                },
              },
            }}
            whileHover={{
              scale: 1.1,
              rotate: 5,
              transition: { duration: 0.2 },
            }}
            className="p-2 rounded-full hover:bg-blue-400/95"
          >
            <Icon className="text-white" />
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}
