import { useContext } from "react";
import { DarkModeContext } from "../store/DarkModeContext";

export default function useDarkMode() {
  return useContext(DarkModeContext);
}
