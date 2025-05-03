import { AtSign, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: Github, href: "https://github.com/ionStici" },
  { icon: AtSign, href: "mailto:contact@ionstici.dev" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ionstici/" },
  { icon: Twitter, href: "https://twitter.com/ionsticidev" },
  { icon: Instagram, href: "https://www.instagram.com/ionstici.dev/" },
];

export function SocialLinks() {
  return (
    <motion.div
      initial={{ y: "-1500px", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="w-fit sm:mx-auto flex items-center justify-start sm:justify-center gap-2 px-3 py-1 mb-4 sm:mb-6 lg:mb-8 border border-blue-400/95 rounded-xl shadow-inner shadow-blue-600/75 backdrop-blur-[1px]"
    >
      <motion.div
        className="flex gap-2"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
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
                transition: { type: "spring", stiffness: 200, damping: 15 },
              },
            }}
            whileHover={{ scale: 1.1, rotate: 5, transition: { duration: 0.2 } }}
            className="p-2 rounded-full hover:bg-blue-400/95"
          >
            <Icon className="text-white" />
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}
