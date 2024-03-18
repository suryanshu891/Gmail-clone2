//***************Gmail API***************

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/header';
import Leftside from './Components/leftside';
import Footer from './Components/Footer';
import Rightside from './Components/rightside';
import Starred from './Components/Sub-components/Starred';
import Snoozed from './Components/Sub-components/Snoozed';
import Sent from './Components/Sub-components/Sent';
import Drafts from './Components/Sub-components/Drafts';
import Inbox from './Components/Sub-components/Inbox';




function App() {
  return (
    <>
      <div class="body-wrapper" >

        <Header />
        <Leftside />
      <Footer/>
      <Rightside/>
        <Routes>
        <Route path="/Inbox" element={<Inbox/>} />
        <Route path="/Starred" element={<Starred/>} />
        <Route path="/Snoozed" element={<Snoozed/>} />
        <Route path="/Sent" element={<Sent/>} />
        <Route path="/Drafts" element={<Drafts/>} />
        </Routes>



      </div>

    </>
  );
}

export default App;


















// //*****UseRef1*******

// import Ref1 from './UseRef/Ref1';

// function App() {
//   return (
//     <>
//       
//       {/* <Ref1/> */}


      
//     </>
    
//   );
// }

// export default App; 




//********Accesstoken************

// import Accesstoken from './Accesstoken/Accesstoken';

// function App() {
//   return(
//     <>
    
//     <Accesstoken/>
//     </>
//   )
// }
// export default App;






// *************router-dom***********

// import { Routes,Route } from 'react-router-dom';
// import Contact from './routerdom/Contact';
// import About from './routerdom/About';
// import Home from './routerdom/Home';
// import Navbar from './routerdom/Navbar';

// function App() {

//   return (
//     <>
//     <Navbar/>
//     <div>
      
//       <Routes>
//         <Route path='/contact' element={<Contact/>}/>
//         <Route path='/about' element={<About/>}/>
//         <Route path='/home' element={<Home/>}/>


//       </Routes>



//     </div>
//     </>
//   )
// }

// export default App






