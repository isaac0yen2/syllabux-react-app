import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom"
import Header from './components/Header'
import Imageslider from './components/Image_slider'
import HomeInfoIndex from './components/Home_info';
import Aboutus from './components/AboutUs';
import ContactForm from './components/ContactForm';
import Gallery from './components/Gallery'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<><Header /><HomeInfoIndex /></>}></Route>
        </Routes>
      </Router>


      <Router>
      <Routes>
        <Route exact path="/aboutUs" element={<><Header /><Imageslider /><Aboutus /></>}></Route>
      </Routes>
      </Router>

      <Router>
      <Routes>
        <Route exact path="/gallery" element={<><Header /><div id="disp"><Gallery /></div></>}></Route>
        </Routes>
      </Router>

      <Router>
      <Routes>
        <Route exact path="/contact" element={<><Header /><ContactForm /></>}></Route>
      </Routes>
      </Router>
</>
    // <>
    // <div id='home'>
    // <Header />
    // <HomeInfoIndex />
    // </div>
    // 
    // <div id='about' className='p-5'>
    // <Aboutus />
    // </div>
    // <div id='gallery' className='text-center'>
    // 
    // </div>
    // <div id='contact'>
    //   
    // </div>
    // </>
    )
}

export default App;
