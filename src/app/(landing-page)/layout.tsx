import React from "react";
import LandingPageFooter from "./landing-page-footer";

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <LandingPageFooter />
    </>
  );
};

export default LandingPageLayout;
