import { AnimatePresence, motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { IconCheck } from "../../assets/icons";
import { useGetFeatured } from "../../hooks/use-get-featured";

export function FilterFeatured() {
  const [searchParams, setSearchParams] = useSearchParams();

  const featured = useGetFeatured();

  const handleClick = () => {
    if (featured) {
      searchParams.set("featured", "false");
      setSearchParams(searchParams);
    } else {
      searchParams.delete("featured");
      setSearchParams(searchParams);
    }
  };

  return (
    <div className="px-5 border-b border-gray-200 mb-5 pb-6">
      <p className="text-blue-900 font-medium text-lg mb-3">Featured</p>

      <button onClick={handleClick} className="flex items-center gap-2 cursor-pointer">
        <Icon isOpen={featured} />
        <p className="text-blue-900">Show featured projects</p>
      </button>
    </div>
  );
}

function Icon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="flex items-center justify-center size-5 border border-blue-300 rounded-md shadow-inner shadow-blue-200">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
          >
            <IconCheck className="size-6 fill-blue-500 pb-[1px]" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
