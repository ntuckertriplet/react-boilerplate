import { useContext } from "react";
import BooleanContext from "../../context/boolean-context";

const useBooleanContext = () => {
  return useContext(BooleanContext);
};

export default useBooleanContext;
