import { useEffect, useState } from "react";
import BooleanContext from "../../context/boolean-context";
import { BooleanProviderProps } from "./boolean-provider.props";

const BooleanProvider = ({ children }: BooleanProviderProps) => {
  const [isTrue, setIsTrue] = useState<boolean>(true);

  useEffect(() => {
    setIsTrue(true);
  }, []);

  return (
    <BooleanContext.Provider value={{ isTrue }}>
      {children}
    </BooleanContext.Provider>
  );
};

export default BooleanProvider;
