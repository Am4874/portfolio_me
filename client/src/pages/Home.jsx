import React from "react";
import { About, Contact } from "../Components";

function Home() {
  return (
    <div className="m-8 dark:bg-slate-600 p-3 rounded-lg shadow">
      <About />
      <Contact />
    </div>
  );
}

export default Home;
