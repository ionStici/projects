import { SocialLinks } from "./social-links";
import { TitleSubtitle } from "./title-subtitle";

export function Header() {
  return (
    <header className="pt-16 sm:pt-20 mb-20 sm:mb-28">
      <SocialLinks />
      <TitleSubtitle />
    </header>
  );
}
