import { useSearchParams } from "react-router-dom";

export const useGetFeatured = () => {
  const [searchParams] = useSearchParams();
  const featured = searchParams.get("featured");
  const isFeatured = !featured || featured !== "false";
  return isFeatured;
};
