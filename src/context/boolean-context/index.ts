import { createContext } from "react";

const BooleanContext = createContext<{
  isTrue: boolean | null;
}>({ isTrue: true });

export default BooleanContext;
