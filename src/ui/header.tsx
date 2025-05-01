import { AtSign, Github, Instagram, Linkedin, Twitter } from "lucide-react";

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
    <div className="flex items-center justify-center flex-col gap-5">
      <h1 className="text-white text-6xl font-bold">Ion Stici's Web Work</h1>
      <p className="w-full sm:w-fit text-blue-100 text-lg font-normal bg-blue-400/75 px-3 py-1 rounded-md">
        Browse My Portfolio of Full-Cycle Web Solutions
      </p>
    </div>
  );
}

function SocialLink() {
  return (
    <div
      className="w-fit sm:mx-auto flex items-center justify-start sm:justify-center 
      gap-2 px-3 py-1 
      mb-4 sm:mb-6
      border border-blue-400/95 rounded-xl shadow-inner shadow-blue-600/75"
    >
      <a href="" className="p-2 rounded-full hover:bg-blue-400/95">
        <Github className="text-white" />
      </a>
      <a href="" className="p-2 rounded-full hover:bg-blue-400/95">
        <AtSign className="text-white" />
      </a>
      <a href="" className="p-2 rounded-full hover:bg-blue-400/95">
        <Linkedin className="text-white" />
      </a>
      <a href="" className="p-2 rounded-full hover:bg-blue-400/95">
        <Twitter className="text-white" />
      </a>
      <a href="" className="p-2 rounded-full hover:bg-blue-400/95">
        <Instagram className="text-white" />
      </a>
    </div>
  );
}
