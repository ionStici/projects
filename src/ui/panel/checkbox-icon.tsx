import { AnimatePresence, motion } from "framer-motion";
import { IconCheck } from "../../assets/icons";

export function CheckboxIcon({ isOpen }: { isOpen: boolean }) {
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
