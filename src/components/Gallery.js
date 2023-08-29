import React, { useState } from 'react';
import assembly from '../public-img/assembly.jpeg';
import assembly2 from '../public-img/assembly2.jpeg';
import christmas from '../public-img/christmas.jpeg';
import christmas2 from '../public-img/christmas2.jpeg';
import graduate from '../public-img/graduate.jpeg'
import classroom from '../public-img/classroom.jpeg'
import classroom2 from '../public-img/classroom2.jpeg'

const Gallery = () => {
  const [expandedImage, setExpandedImage] = useState('');
  const [imageText, setImageText] = useState('');

  const show = (src, alt) => {
    setExpandedImage(src);
    setImageText(alt);
  };
      const scrollToSection = (target) => {
      const targetSection = document.getElementById(target);
  
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });
        console.log(`scrolled to ${target} section`);
      }
    };

  return (



    <>
    <h1 className='text-center'>GALLERY</h1>
    
          {expandedImage && (
            <div className="container d-none d-sm-block p-2 border-primary">
              <span onClick={() => setExpandedImage('')} className="closebtn">
                &#10005;
              </span>
    
              <img
      id="expandedImg"
      src={expandedImage}
      alt={imageText}
      className="img-fluid mx-auto d-block rounded-5 border-5"
      style={{ maxHeight: '75vh',width:'80%' }}
    />
    
              <div id="imgtext" className='text-center'>{imageText}</div>
            </div>
          )}
      <div className="container p-5">
        <div className="row">
          <div className="col-md-3 p-2">
            <img src={assembly} alt="Nature" className="img-fluid img-thumbnail" onClick={() => {
              show(assembly, 'ASSEMBLY') 
              scrollToSection("disp")
              }} />
          </div>
          <div className="col-md-3 p-2">
            <img src={assembly2} alt="Snow" className="img-fluid img-thumbnail" onClick={() => {
              show(assembly2, 'ASSEMBLY')
              scrollToSection("disp")
            }} />
          </div>
          <div className="col-md-3 p-2">
            <img src={christmas} alt="Mountains" className="img-fluid img-thumbnail" onClick={() => {
              show(christmas, 'OUR CHRISMAS PARTY')
              scrollToSection("disp")

              }}/>
          </div>
          <div className="col-md-3 p-2">
            <img src={christmas2} alt="Lights" className="img-fluid img-thumbnail" onClick={() => {
              show(christmas2, 'OUR CHRISTMAS PARTY')
              scrollToSection("disp")
            } }/>
          </div>
          <div className="col-md-3 p-2">
            <img src={graduate} alt="Lights" className="img-fluid img-thumbnail" onClick={() =>{ 
              show(graduate, 'OUR VALEDICTORY SERVICE')
              scrollToSection("disp")
            }} />
          </div>
          <div className="col-md-3 p-2">
            <img src={classroom} alt="Lights" className="img-fluid img-thumbnail" onClick={() =>{ 
              show(classroom, 'CLASSROOM ACTIVITIES')             
               scrollToSection("disp")
            } }/>
          </div>
          <div className="col-md-3 p-2">
            <img src={classroom2} alt="Lights" className="img-fluid img-thumbnail" onClick={() => {
              show(classroom2, 'CLASSROOM ACTIVITIES')
              scrollToSection("disp")
              } }/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
