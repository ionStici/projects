import { AnimatePresence, motion } from "framer-motion";
import { IconCheck } from "../../assets/icons";
import { useGetFeatured } from "../../hooks/use-get-featured";
import { useSearchParams } from "react-router-dom";

export function BtnFeatured() {
  const isFeatured = useGetFeatured();
  const [searchParams, setSearchParams] = useSearchParams();

  const toggleFeatured = () => {
    if (isFeatured) searchParams.set("featured", "false");
    else searchParams.delete("featured");
    setSearchParams(searchParams);
  };

  return (
    <motion.button
      onClick={toggleFeatured}
      whileHover={{ maxWidth: "150px" }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="hidden [@media(min-width:500px)]:flex w-full max-w-32 h-12 items-center justify-center gap-2 
      rounded-lg shadow cursor-pointer bg-white text-blue-700 transition hover:shadow-md"
    >
      <Icon isFeatured={isFeatured} />
      <span className={`font-medium ${isFeatured ? "!text-green-500" : ""}`}>Featured</span>
    </motion.button>
  );
}

function Icon({ isFeatured }: { isFeatured: boolean }) {
  return (
    <div
      className={`flex items-center justify-center size-[21px] border-2 rounded-md shadow-inner shadow-green-500/25
      ${isFeatured ? "border-green-400" : "border-blue-500"}`}
    >
      <AnimatePresence>
        {isFeatured && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
          >
            <IconCheck className="size-6 fill-green-500 pb-[1px]" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
