import React from "react";
import "./App.css";
import NewForm from "./components/Form";

function App() {
  return (
    <div className="App-body">
      <h1>Please Check out our Form Below!</h1>
      <div className="form-container">
        <NewForm />
      </div>
    </div>
  );
}

export default App;
