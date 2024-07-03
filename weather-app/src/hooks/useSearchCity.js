import { useContext } from "react";
import { SearchContext } from "../store/SearchContext";

export default function useSearchCity() {
  return useContext(SearchContext);
}
