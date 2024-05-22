// import "./App.css";
import { useState } from "react";
import { Footer, Header } from "./Components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  return loading ? (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : null;
}
export default App;
