import React from "react";

type MainProps = {
  children?: React.ReactNode;
};

const MainLayout: React.FC<MainProps> = ({children}) => {

  return (
    <main className="bg-alaz-violet basis-3/4 min-w-[300px] grow">
      {children}
    </main>
  );
};

export default MainLayout;