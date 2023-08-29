
let Imageslider = ()=>{


    return(
<>
  <div className='container div-center text-center'>
    <h3 className="display-6 color-change">So why should you enrol here?</h3>
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner push-inner-padding text-center">
        <div className="carousel-item active container display-div-1 rounded-4 img-width-control align-items-center" data-bs-interval="2000">
          <div className="row sizer"> 
            <h1 className="col-12 w3-animate-right">Empowering Future Leaders</h1>
              <h3 className="col-12 w3-animate-right">"Fostering leadership qualities to prepare students for success and impact."</h3>
            </div>
        </div>
        <div className="carousel-item container display-div-2 rounded-4 img-width-control align-items-center" data-bs-interval="2000">
          <div className="row sizer ">
            <h1 className="col-12 w3-animate-right">Cutting-Edge Facilities</h1>
              <h3 className="col-12 w3-animate-right">"Show off any state-of-the-art facilities or resources that your school offers"</h3>
             
            </div>
        </div>
        <div className="carousel-item container display-div-3 rounded-4 img-width-control align-items-center" data-bs-interval="2000">
          <div className="row sizer ">
            <h1 className="col-12 w3-animate-right">Parent Involvement</h1>
              <h3 className="col-12 w3-animate-right">"Emphasize the importance of parent-teacher collaboration in your school community"</h3>
            </div>
          
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden text-primary">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden text-primary">Next</span>
      </button>
    </div>
  </div>
</>

    )
}

export default Imageslider

//make it an image slider eiter by using all the images as an array or smthn