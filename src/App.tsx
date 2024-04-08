import React from "react";
import Header from "./components/Header/index.tsx";
import Items from "./components/Items/index.tsx";
import Footer from "./components/Footer/index.tsx";
import "./index.scss";
import Categories from "./components/Categories/index.tsx";
import ShowFullItem from "./components/ShowFullItem/index.tsx";
import { useAppContext } from "./useAppContext.tsx";

//https://colorscheme.ru/#0I31Vw0w0w0w0 - color scheme

export default function App(): JSX.Element {

  const { showFullItem } = useAppContext();

  return (
    <div className="wrapper">
      <Header />
      <Categories />
      <Items />
      {showFullItem && <ShowFullItem />}
      <Footer />
    </div>
  );
}