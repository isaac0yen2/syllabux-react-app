import React from "react";
import user from "../public-img/bx-user.png";
import syllabux from "../public-img/syllabux.png";

function Header() {
  return (
    <>
      <div className="container border-bottom border-primary border-5 text-center p-2 rounded-3 color-edit">
        <div className="row">
          <div className="col-md-6 col-lg-6 container">
            <div className="row">
              <a className="col-4 border rounded-bottom-5 border-5 icon-overlay" href="/">
                <figure>
                  <img src={user} alt="user icon" className="img-fluid p-2" />
                  <figcaption> HOME PAGE </figcaption>
                </figure>
              </a>
              <a className="col-4 border rounded-bottom-5 border-5 icon-overlay" href="/aboutUs">
                <figure>
                  <img src={user} alt="user icon" className="img-fluid p-2" />
                  <figcaption> ABOUT US </figcaption>
                </figure>
              </a>
              <a className="col-4 border rounded-bottom-5 border-5 icon-overlay" href="/gallery">
                <figure>
                  <img src={user} alt="user icon" className="img-fluid p-2" />
                  <figcaption> GALLERY </figcaption>
                </figure>
              </a>
            </div>
          </div>
          <div className="col-md-3 col-lg-3 p-2">
            <img src={syllabux} alt="syllabux Icon" className="img-fluid mx-auto" />
          </div>
          <div className="container col-md-3 col-lg-3">
            <div className="row text-center">
              <a className="col-6 border icon-overlay rounded-bottom-5 border-5" href="/contact">
                <figure>
                  <img src={user} alt="user icon" className="img-fluid p-2" />
                  <figcaption> CONTACT US </figcaption>
                </figure>
              </a>
              <div className="col-6 border icon-overlay rounded-bottom-5 border-5" data-bs-toggle="modal" data-bs-target="#myModal">
                <figure>
                  <img src={user} alt="user icon" className="img-fluid p-2" />
                  <figcaption> LOG IN </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="myModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                LOG IN
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input type="text" className="form-control" id="username" placeholder="Enter your username" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                </div>
                <button type="#" className="btn btn-primary">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
