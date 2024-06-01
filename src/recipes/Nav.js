


export const Nav = ()=> {

    return (
    <>
      <>
  {/* ======= Header ======= */}
  <header id="header" className="header fixed-top d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">
      <a
        href="index.html"
        className="logo d-flex align-items-center me-auto me-lg-0"
      >
        <h1>
          GoRecipe<span>.</span>
        </h1>
      </a>
                                                                                                                                                                                        
      <nav id="navbar" className="navbar">
        <ul>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#menu">Recipe</a>
          </li>
        
        </ul>
      </nav>
      {/* .navbar */}
      <a className="btn-book-a-table" href="#menu">
        Get started
      </a>
      
      <i className="mobile-nav-toggle mobile-nav-show bi bi-list " />
      <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
    </div>
  </header>
  {/* End Header */}
</>

    </>)
}

