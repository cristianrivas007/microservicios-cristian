import React from "react";
import "./App.css";

function App() {
  return (
    <div className="viewer-container">
      <iframe
        src="/cr-microservicios.pdf"
        title="PDF Viewer"
        className="pdf-frame"
      />
    </div>
  );
}

export default App;