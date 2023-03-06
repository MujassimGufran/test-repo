import React from "react";

export default function BootstrapExample() {
  return (
    <>
      <nav className="navbar navbar-expand-lg background">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">
            My Shop
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link text-light active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <form className="d-flex w-100" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link text-light dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  MG
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Cart
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Log Out
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="6"
            aria-label="Slide 7"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="assets/images/p1.jpg"
              height="600px"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="assets/images/p2.jpg"
              height="600px"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="assets/images/p3.jpg"
              height="600px"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="assets/images/p4.jpg"
              height="600px"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="assets/images/p5.jpg"
              height="600px"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="assets/images/p6.jpg"
              height="600px"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="assets/images/p7.jpg"
              height="600px"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <h5 className="background text-light text-center p-2 my-2">
        Lastest Product Section
      </h5>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
            <div class="card">
              <img src="assets/product/m1.jpg" height="200px" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Product title 1</h5>
                <p class="card-text">
                  Price : &#8377;<del>4500</del>
                  <sup>2500</sup>
                </p>
                <p class="card-text">Discount : 60%</p>
                <a href="#" class="btn background text-light w-100 btn-sm">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
            <div class="card">
              <img src="assets/product/m2.jpg" height="200px" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Product title 2</h5>
                <p class="card-text">
                  Price : &#8377;<del>4500</del>
                  <sup>2500</sup>
                </p>
                <p class="card-text">Discount : 60%</p>
                <a href="#" class="btn background text-light w-100 btn-sm">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
            <div class="card">
              <img src="assets/product/m3.jpg" height="200px" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Product title 3</h5>
                <p class="card-text">
                  Price : &#8377;<del>4500</del>
                  <sup>2500</sup>
                </p>
                <p class="card-text">Discount : 60%</p>
                <a href="#" class="btn background text-light w-100 btn-sm">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
            <div class="card">
              <img src="assets/product/m4.jpg" height="200px" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Product title 4</h5>
                <p class="card-text">
                  Price : &#8377;<del>4500</del>
                  <sup>2500</sup>
                </p>
                <p class="card-text">Discount : 60%</p>
                <a href="#" class="btn background text-light w-100 btn-sm">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
            <div class="card">
              <img src="assets/product/m7.jpg" height="200px" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Product title 5</h5>
                <p class="card-text">
                  Price : &#8377;<del>4500</del>
                  <sup>2500</sup>
                </p>
                <p class="card-text">Discount : 60%</p>
                <a href="#" class="btn background text-light w-100 btn-sm">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
            <div class="card">
              <img src="assets/product/m6.jpg" height="200px" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Product title 6</h5>
                <p class="card-text">
                  Price : &#8377;<del>4500</del>
                  <sup>2500</sup>
                </p>
                <p class="card-text">Discount : 60%</p>
                <a href="#" class="btn background text-light w-100 btn-sm">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
            <div class="card">
              <img src="assets/product/m7.jpg" height="200px" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Product title 7</h5>
                <p class="card-text">
                  Price : &#8377;<del>4500</del>
                  <sup>2500</sup>
                </p>
                <p class="card-text">Discount : 60%</p>
                <a href="#" class="btn background text-light w-100 btn-sm">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
            <div class="card">
              <img src="assets/product/m8.jpg" height="200px" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Product title 8</h5>
                <p class="card-text">
                  Price : &#8377;<del>4500</del>
                  <sup>2500</sup>
                </p>
                <p class="card-text">Discount : 60%</p>
                <a href="#" class="btn background text-light w-100 btn-sm">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>

          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
            <div class="card">
              <img src="assets/product/m1.jpg" height="200px" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Product title 1</h5>
                <p class="card-text">
                  Price : &#8377;<del>4500</del>
                  <sup>2500</sup>
                </p>
                <p class="card-text">Discount : 60%</p>
                <a href="#" class="btn background text-light w-100 btn-sm">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
            <div class="card">
              <img src="assets/product/m2.jpg" height="200px" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Product title 2</h5>
                <p class="card-text">
                  Price : &#8377;<del>4500</del>
                  <sup>2500</sup>
                </p>
                <p class="card-text">Discount : 60%</p>
                <a href="#" class="btn background text-light w-100 btn-sm">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
            <div class="card">
              <img src="assets/product/m3.jpg" height="200px" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Product title 3</h5>
                <p class="card-text">
                  Price : &#8377;<del>4500</del>
                  <sup>2500</sup>
                </p>
                <p class="card-text">Discount : 60%</p>
                <a href="#" class="btn background text-light w-100 btn-sm">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
            <div class="card">
              <img src="assets/product/m4.jpg" height="200px" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Product title 4</h5>
                <p class="card-text">
                  Price : &#8377;<del>4500</del>
                  <sup>2500</sup>
                </p>
                <p class="card-text">Discount : 60%</p>
                <a href="#" class="btn background text-light w-100 btn-sm">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
            <div class="card">
              <img src="assets/product/m8.jpg" height="200px" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Product title 5</h5>
                <p class="card-text">
                  Price : &#8377;<del>4500</del>
                  <sup>2500</sup>
                </p>
                <p class="card-text">Discount : 60%</p>
                <a href="#" class="btn background text-light w-100 btn-sm">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
            <div class="card">
              <img src="assets/product/m6.jpg" height="200px" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Product title 6</h5>
                <p class="card-text">
                  Price : &#8377;<del>4500</del>
                  <sup>2500</sup>
                </p>
                <p class="card-text">Discount : 60%</p>
                <a href="#" class="btn background text-light w-100 btn-sm">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
            <div class="card">
              <img src="assets/product/m7.jpg" height="200px" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Product title 7</h5>
                <p class="card-text">
                  Price : &#8377;<del>4500</del>
                  <sup>2500</sup>
                </p>
                <p class="card-text">Discount : 60%</p>
                <a href="#" class="btn background text-light w-100 btn-sm">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
            <div class="card">
              <img src="assets/product/m8.jpg" height="200px" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Product title 8</h5>
                <p class="card-text">
                  Price : &#8377;<del>4500</del>
                  <sup>2500</sup>
                </p>
                <p class="card-text">Discount : 60%</p>
                <a href="#" class="btn background text-light w-100 btn-sm">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
            <div class="card">
              <img src="assets/product/m1.jpg" height="200px" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Product title 9</h5>
                <p class="card-text">
                  Price : &#8377;<del>4500</del>
                  <sup>2500</sup>
                </p>
                <p class="card-text">Discount : 60%</p>
                <a href="#" class="btn background text-light w-100 btn-sm">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
            <div class="card">
              <img src="assets/product/m2.jpg" height="200px" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Product title 10</h5>
                <p class="card-text">
                  Price : &#8377;<del>4500</del>
                  <sup>2500</sup>
                </p>
                <p class="card-text">Discount : 60%</p>
                <a href="#" class="btn background text-light w-100 btn-sm">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
            <div class="card">
              <img src="assets/product/m3.jpg" height="200px" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Product title 8</h5>
                <p class="card-text">
                  Price : &#8377;<del>4500</del>
                  <sup>2500</sup>
                </p>
                <p class="card-text">Discount : 60%</p>
                <a href="#" class="btn background text-light w-100 btn-sm">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
            <div class="card">
              <img src="assets/product/m4.jpg" height="200px" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Product title 8</h5>
                <p class="card-text">
                  Price : &#8377;<del>4500</del>
                  <sup>2500</sup>
                </p>
                <p class="card-text">Discount : 60%</p>
                <a href="#" class="btn background text-light w-100 btn-sm">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
            <div class="card">
              <img src="assets/product/m3.jpg" height="200px" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Product title 8</h5>
                <p class="card-text">
                  Price : &#8377;<del>4500</del>
                  <sup>2500</sup>
                </p>
                <p class="card-text">Discount : 60%</p>
                <a href="#" class="btn background text-light w-100 btn-sm">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
            <div class="card">
              <img src="assets/product/m6.jpg" height="200px" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Product title 8</h5>
                <p class="card-text">
                  Price : &#8377;<del>4500</del>
                  <sup>2500</sup>
                </p>
                <p class="card-text">Discount : 60%</p>
                <a href="#" class="btn background text-light w-100 btn-sm">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
            <div class="card">
              <img src="assets/product/m7.jpg" height="200px" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Product title 8</h5>
                <p class="card-text">
                  Price : &#8377;<del>4500</del>
                  <sup>2500</sup>
                </p>
                <p class="card-text">Discount : 60%</p>
                <a href="#" class="btn background text-light w-100 btn-sm">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
            <div class="card">
              <img src="assets/product/m8.jpg" height="200px" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Product title 8</h5>
                <p class="card-text">
                  Price : &#8377;<del>4500</del>
                  <sup>2500</sup>
                </p>
                <p class="card-text">Discount : 60%</p>
                <a href="#" class="btn background text-light w-100 btn-sm">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
