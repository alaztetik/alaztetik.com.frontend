import React from "react";
import "./App.css";

import Navbar from "./components/header/Navbar";
import AsideLayout from "./components/layout/AsideLayout";
import MainLayout from "./components/layout/MainLayout";
import Footer from "./components/footer/Footer";
import Article from "./components/main/Article";
import Card from "./components/aside/Card";

function App() {
  return (
    <React.Fragment>
      <Navbar />

      <div className="flex flex-row justify-between flex-wrap">
        <AsideLayout>
          <Card title="Card 1" body="Card 1 body" link="https://google.com" />
          <Card title="Card 1" body="Card 1 body" />
          <Card title="Card 1" body="Card 1 body" />
        </AsideLayout>

        <MainLayout>
          <Article title="Article 1" body="Article 1 body" />
          <Article title="Article 2" body="Article 2 body" />
          <Article title="Article 3" body="Article 3 body" />
          <Article title="Article 4" body="Article 4 body" />
        </MainLayout>
      </div>

      <Footer>
        <p>Footer</p>
      </Footer>
    </React.Fragment>
  );
}

export default App;
