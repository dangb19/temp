import { useContext } from "react";
import { LocationContext } from "../store/LocationContext";

export default function useLocation() {
  return useContext(LocationContext);
}
