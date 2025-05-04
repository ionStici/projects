import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { basePath } from "../../data/constants";

export function Images({ images, title }: { images: string[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsLoading(true);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsLoading(true);
  };

  if (images.length <= 1) {
    return (
      <>
        {isLoading && (
          <div className="size-full bg-white/75 rounded-xl">
            {isError && (
              <div className="flex items-center justify-center w-full h-full">
                <p className="text-gray-500">Failed to load image</p>
              </div>
            )}
          </div>
        )}

        <img
          src={`${basePath}/images/${images[0]}`}
          alt={title}
          className={`rounded-xl size-full object-cover ${isLoading ? "hidden" : "block"}`}
          width={370}
          height={256}
          onLoad={() => setIsLoading(false)}
          onError={() => setIsError(true)}
        />
      </>
    );
  }

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ x: 400 }}
          animate={{ x: 0 }}
          exit={{ x: -400 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="w-full h-full"
        >
          {isLoading && (
            <div className="size-full bg-white/75 rounded-xl">
              {isError && (
                <div className="flex items-center justify-center w-full h-full">
                  <p className="text-gray-500">Failed to load image</p>
                </div>
              )}
            </div>
          )}
          <img
            src={`${basePath}/images/${images[currentIndex]}`}
            alt={`${title} - Image ${currentIndex + 1}`}
            className={`rounded-xl size-full object-cover ${isLoading ? "hidden" : "block"}`}
            width={370}
            height={256}
            onLoad={() => setIsLoading(false)}
            onError={() => setIsError(true)}
          />
        </motion.div>
      </AnimatePresence>

      <IconButton onClick={prevImage} className="left-2" ariaLabel="Previous image">
        <ChevronLeft size={24} />
      </IconButton>

      <IconButton onClick={nextImage} className="right-2" ariaLabel="Next image">
        <ChevronRight size={24} />
      </IconButton>
    </>
  );
}

function IconButton({
  children,
  onClick,
  className,
  ariaLabel,
}: {
  children: React.ReactNode;
  onClick: () => void;
  className: string;
  ariaLabel: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200 cursor-pointer
      ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
