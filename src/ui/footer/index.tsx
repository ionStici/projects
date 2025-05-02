export function Footer() {
  return (
    <footer className="pb-12 pt-10 border-t border-blue-400">
      <Copyright />
    </footer>
  );
}

function Copyright() {
  return (
    <p className="text-white text-center text-sm lg:text-base">
      © {new Date().getFullYear()} Ion Stici. All rights reserved.
    </p>
  );
}
