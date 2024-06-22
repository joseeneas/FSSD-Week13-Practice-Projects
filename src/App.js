
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
//import About from "./components/React-Router-Hooks/About";
import { Outlet, Navigate, NavLink } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import Products from "./components/React-Router-Hooks/Products";
//import Home from "./components/React-Router-Hooks/Home";
import PageNotFound from "./components/React-Router-Hooks/PageNotFound";
import { useParams } from 'react-router-dom';
import Layout from "./components/React-Router-Hooks/Layout";
import About from "./components/React-Router/About";
import Home from "./components/React-Router/Home";


// React-Router deck slides 23 to 25
function App() {
  return (
    <div>
       <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </nav>

     
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={ <About/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}



// The following two functions are the example of React-Router Slide no 16 and 17 
// function Layout() {
//   return (
//     <>
//       <Navbar bg="dark" expand="sm" variant="dark">
//         <Nav>
//         <LinkContainer to="/">
//           <Nav.Link>Home</Nav.Link>
//         </LinkContainer>
//         <LinkContainer to="/about">
//           <Nav.Link>About</Nav.Link>
//         </LinkContainer>
//         <LinkContainer to="/products">
//           <Nav.Link>Products</Nav.Link>
//         </LinkContainer>
//         </Nav>
//       </Navbar>
//       <main>

//         <Outlet></Outlet>
//       </main>

    
//     </>
//     );
// }

// This function is the example of Layout for React-Router-Hooks deck Slide 16
// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route path="about" element={<About />} />
//           <Route path="products" element={<Products />} />
//           <Route path="*" element={<PageNotFound />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }


// These two functions are created for React-Router : Slide no. 5 to 6
// function User() {
//   const { name } = useParams();
//   return <div>User Name: {name}</div>;
// }

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/home" element={<Home />}></Route>
//         <Route path="/users/:name" element={<User />}></Route>
//       </Routes>
//     </Router>
//   );
// }


//Slide deck name - 05_Context API
//Topic - Steps to use Context API (Slide no. 7 to 13)
/*
import MyProvider from './components/ConextAPI/ContextAPIExample1/MyProvider';
import ChildComponent from './components/ConextAPI/ContextAPIExample1/ChildComponent';
const App = () => {
  return(
    <MyProvider>
      <ChildComponent/>
    </MyProvider>
  )
}
*/


//Slide deck name - 05_Context API
//Topic - User theme app (Slide no. 14 to 19)
/*
import ThemeProvider from "./components/ConextAPI/ThemeContextExample/ThemeProvider";
import ThemeButton from "./components/ConextAPI/ThemeContextExample/ThemeButton";
const App = () => {
  return(
    <ThemeProvider>
      <ThemeButton/>
    </ThemeProvider>
  )
}
*/


//Slide deck name - 06_Advanced use cases of Context API
//Topic - Updating Context Data from different Component (Slide no. 3 to 7)
/*
import ThemeProvider from "./components/AdvancedUsesCasesContextAPI/UpdatingContextData/ThemeProvider";
import ThemeButton from "./components/AdvancedUsesCasesContextAPI/UpdatingContextData/ThemeButton"

const App = () => {
  return (
  <ThemeProvider>
  <ThemeButton />
  </ThemeProvider>
  );
  };
*/


//Slide deck name - 06_Advanced use cases of Context API
//Topic - Using Multiple Contexts (Slide no. 8 to 13)
/*
import ThemeProvider from './components/AdvancedUsesCasesContextAPI/UsingMultipleContexts/ThemeProvider';
import LangUpdateProvider from './components/AdvancedUsesCasesContextAPI/UsingMultipleContexts/LangUpdateProvider';
import Main from './components/AdvancedUsesCasesContextAPI/UsingMultipleContexts/Main';

const App = () => {
  return (
  <ThemeProvider>
  <LangUpdateProvider>
  <Main />
  </LangUpdateProvider>
  </ThemeProvider>
  );
  };
*/
export default App;
