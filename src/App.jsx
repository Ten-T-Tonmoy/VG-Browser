import React from "react";
import Navbar from "./components/navbar";
import "./index.css";

function App() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] grid-rows-[auto_1fr]">
      <div className="col-span-1 lg:col-span-2">
        <Navbar />
      </div>

      <div className="hidden lg:block bg-red-400">side</div>

      <div className="bg-blue-500">Main</div>
    </div>
  );
}

export default App;
