import React from "react";
import "./App.css";
import Main from "./components/Main";
import LinkWrapper from "./components/LinkWrapper";
import BioWrapper from "./components/BioWrapper";
import PhotoWrapper from "./components/PhotoWrapper";
import FooterWrapper from "./components/FooterWrapper";
import BioText from "./components/BioText";

function App() {
  return (
    <React.Fragment>
      <Main>
        <PhotoWrapper />
        <BioWrapper>
          <BioText />
        </BioWrapper>
        <LinkWrapper />
      </Main>
      <FooterWrapper></FooterWrapper>
    </React.Fragment>
  );
}

export default App;
