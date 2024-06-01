


export const Main = ()=> {

      return (
        <>
  {/* ======= Hero Section ======= */}
  <section id="hero" className="hero d-flex align-items-center section-bg">
    <div className="container">
      <div className="row justify-content-between gy-5"> 
      <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start  ">
          <img
            src="assets/img/menu/menu-item-2.png"
            className="img-fluid"
            alt=""
            data-aos="zoom-out"
            data-aos-delay={300}
          />
        </div>               
        <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
          <h2 data-aos="fade-up">
            Enjoy The only recipe app you’ll need
            <br />
            Fabulous
          </h2>
          <p data-aos="fade-up" data-aos-delay={100}>
          This recipe app includes some beautiful photography.
          The recipe app posts are easy to read, which makes it enjoyable for visitors to find recipes that interest them.
          </p>
          <div className="d-flex" data-aos="fade-up" data-aos-delay={200}>
            <a href="#menu" className="btn-book-a-table">
              Get started
            </a>
            <a
              href="https://www.youtube.com/shorts/PuDOOK7nTlw?feature=share"
              className="glightbox btn-watch-video d-flex align-items-center"
            >
              <i className="bi bi-play-circle" />
              <span>Watch Video</span>
            </a>
          </div>
        </div>
       
      </div>
    </div>
  </section>
  {/* End Hero Section */}
  <main id="main">
    {/* ======= About Section ======= */}
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>About</h2>
          <p>
            Learn More <span>About GoRecipe</span>
          </p>
        </div>
        <div className="row gy-4">
          
          <div
            className="col-md-5 d-flex align-items-end"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <div className="content ps-0 ps-lg-5">
              <p className="fst-italic">
              This website includes lots of options for filtering results, making it easier for visitors to find the exact recipe they want. 
              
              </p>
              <ul>
                <li>
                  <i className="bi bi-check2-all" /> In addition, there are separate links to ingredients 
                  and gluten-free recipes so that people have and easy time finding them.
                </li>
                <li>
                  <i className="bi bi-check2-all" /> Our love of food and nutrition through recipes that are both healthy and tasty.
                </li>
                <li>
                  <i className="bi bi-check2-all" /> GoRecipe featured delicious recipes and eating guides. The website design is comprehensive, but simple, making it easy to navigate. 
                  The header features different articles andvisitors can explore the recipes through the search feature.
                </li>
              </ul>
              <p>
              GoRecipe presents recipes that are quick to make and delicious, but don't cost a fortune to make. The design is both elegant and modern. 
              </p>
              <div className="position-relative mt-4">
                <img
                  src="assets/img/about-2.jpg"
                  className="img-fluid"
                  alt=""
                />
                <a
                  href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                  className="glightbox play-btn"
                />
              </div> 
                                                                            
            </div>
          </div>
          <div
            className="col-md-7 position-relative about-img "
            // style={{ backgroundImage: "url(assets/img/bgimg.jpeg)" }}
            data-aos="fade-up"
            data-aos-delay={150}
          >
            <img
                  src="assets/img/bgimg.jpeg"
                  className="img-fluid"
                  alt=""
                />
          </div>
        </div>
      </div>
    </section>
    {/* End About Section */}
    {/* ======= Why Us Section ======= */}
    <section id="why-us" className="why-us section-bg">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4">
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100}>
            <div className="why-box">
              <h3>Why Choose GoRecipe?</h3>
              <p>
              GoRecipe featured delicious recipes and eating guides. The web app is comprehensive, but simple, making it easy to navigate. 
                  The header features different articles andvisitors can explore the recipes through the search feature.
              </p>
             
            </div>
          </div>
          {/* End Why Box */}
          <div className="col-lg-8 d-flex align-items-center">
            <div className="row gy-4">
              <div className="col-xl-4" data-aos="fade-up" data-aos-delay={200}>
                <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                  <i className="bi bi-clipboard-data" />
                  <h4>Intercontinental Dishes</h4>
                  <img
                  src="assets/img/reservation.jpg"
                  className="img-fluid"
                  alt=""
                />
                  
                  
                </div>
              </div>
              {/* End Icon Box */}
              <div className="col-xl-4" data-aos="fade-up" data-aos-delay={300}>
                <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                  <i className="bi bi-gem" />
                  <h4>Intercontinental Dishes</h4>
                  <img
                  src="assets/img/about-2.jpg"
                  className="img-fluid"
                  alt=""
                />
                </div>
              </div>
              {/* End Icon Box */}
              <div className="col-xl-4" data-aos="fade-up" data-aos-delay={400}>
                <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                  <i className="bi bi-inboxes" />
                  <h4>Intercontinental Dishes</h4>
                  <img
                  src="assets/img/stats-bg.jpg"
                  className="img-fluid"
                  alt=""
                />
                </div>
              </div>
              {/* End Icon Box */}
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Why Us Section */}
    
   
  </main>
  {/* End #main */}
</>
)
  }