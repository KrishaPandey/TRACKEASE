// import React from 'react';
// import Signup from './components/Signup/index';
// import Login from './components/Login/index';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Dash from './components/dashboard/dash';
// import Body from './components/body/index';
// import Navbar from './components/Navbar/Navbar';
// import  About from "./components/Aboutus/About"
// import Contact from './components/Contact/Contact';
// import Layout from './components/Layout';

// function App() {
//   return (
//     <div>
//   <Router>
//     <Routes>
//       <Route path='/' element={<Layout/>}/>
//       <Route path="" element={<Body/>}/>
//       <Route path='/about'element={<About/>}/>
//       <Route path='/login' element={<Login />} />
//       <Route path='/signup' element={<Signup />} />
//       <Route path='/dashboard' element={<Dash/>} />
//       <Route path='/contact' element={<Contact/>}/>
//     </Routes>
//   </Router>
      
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup/index';
import Login from './components/Login/index';
import Dash from './components/dashboard/dash';
import Body from './components/body/index';
import Navbar from './components/Navbar/Navbar';
import About from "./components/Aboutus/About";
import Contact from './components/Contact/Contact';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <div style={{ fontFamily: 'Times New Roman, serif', fontSize: '16px'}}>
        <Navbar/>
        <Routes>
          {/* <Route path='/' element={<Layout />} /> */}
          <Route index element={<Body />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<Dash />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
