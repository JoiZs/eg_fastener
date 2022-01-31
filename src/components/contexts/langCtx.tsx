import React, { createContext, useState } from "react";

export const LangContext = createContext<any>([]);

const LangCtx = (props: any) => {
  const [selectLang, setSelectLang] = useState(0);
  return (
    <LangContext.Provider value={[selectLang, setSelectLang]}>
      {props.children}
    </LangContext.Provider>
  );
};

export default LangCtx;
