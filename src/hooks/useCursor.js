import { useContext } from "react";
import { CursorContext } from "@context/cursorContext";

const useCursor = () => useContext(CursorContext);

export { useCursor }