import React from "react";
import Body from "../components/Body";
import Navbar from "../components/Navbar";
// import Preloader from "../components/Preloader";
import Sidebar from "../components/Sidebar";

export default function Home() {

  return (
    <div>
      {/* <Preloader /> */}
      <Navbar />
      <Sidebar />
      <Body />
    </div>
  );
}
