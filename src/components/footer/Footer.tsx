import React from 'react';

type FooterProps = {
  children?: React.ReactNode;
};

const Footer: React.FC<FooterProps> = ({children}) => {

  return (
    <footer className="bg-alaz-aquamarine h-56">
      {children}
    </footer>
  );
};

export default Footer;