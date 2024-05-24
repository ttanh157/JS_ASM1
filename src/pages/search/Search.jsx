import React from "react";
import Header from "../../components/header/Header";
import SearchPopup from "../../pages/search/SearchPopup";
import Footer from "../../components/footer/Footer";
import SearchList from "./SearchList";

export default function Search() {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3 col-12 mt-5">
            <SearchPopup />
          </div>
          <div className="col-md-9 col-12 mt-5 mb-5">
            <SearchList />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
