import { useContext } from "react";
import { AppContext } from "../contexts/app-context";

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within a AppContextProvider");
  return context;
}
