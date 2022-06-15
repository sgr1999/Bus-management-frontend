
import './App.css';
import {Navbar,NavDropdown,Nav, ToastContainer} from 'react-bootstrap';
import{
 Button,
  Container,
} from "reactstrap";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Home from './HomeComponents/Home';

import {Row, Col } from "reactstrap";
import Menu from './HomeComponents/Menu';
import NavBar from './HomeComponents/NavBar';
import First  from './TestComponent/First';
import Second from './TestComponent/Second';
import Shop from './TestComponent/Shop';

function App() {
  return (
    <div>
      <ToastContainer
   
/>
          <NavBar/>
          <ToastContainer/>
         <Home/>

          {/* <Shop/> */}
          {/* <First/>
          <Second/> */}
    </div>
  );
}

export default App;
