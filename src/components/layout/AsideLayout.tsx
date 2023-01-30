import React from "react";

type AsideLayoutProps = {
  children?: React.ReactNode;
};

const AsideLayout: React.FC<AsideLayoutProps> = ({ children }) => {
  return <aside className="bg-alaz-red basis-1/4 min-w-[250px] grow">{children}</aside>;
};

export default AsideLayout;
