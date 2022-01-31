import React, { createContext, useState } from "react";

interface InquiryCtxType {
  name: string;
  validSubmit: boolean;
}

export const InquiryContext = createContext<any>([]);

const InquiryCtx = (props: any) => {
  const [submitInquiry, setSubmitInquiry] = useState<InquiryCtxType[]>([
    {
      name: "Project",
      validSubmit: true,
    },
    {
      name: "Client",
      validSubmit: false,
    },
    {
      name: "Notifcation",
      validSubmit: false,
    },
  ]);
  return (
    <InquiryContext.Provider value={[submitInquiry, setSubmitInquiry]}>
      {props.children}
    </InquiryContext.Provider>
  );
};

export default InquiryCtx;
