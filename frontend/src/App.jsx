import React from "react";
import { Navbar } from "react-bootstrap";
  import { BrowserRouter, Routes ,Route} from "react-router-dom";
import Br from "./component/Navbar.jsx";
import Cd from "./component/Cont.jsx";
import Fom from "./component/Fom.jsx";

function App() {
  return(
    <div style={{ height:"100vh"}}>
      <hr style={{margin:"0.9px"}}  />
    <Br/>
     <BrowserRouter>
<Routes>
    <Route path="/" element={<Cd />} />
    <Route path="/add/test" element={<Fom />} />
</Routes>
</BrowserRouter>
   </div> 
  )};

  export default App;