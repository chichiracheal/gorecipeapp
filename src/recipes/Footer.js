

export const Footer = ()=> {
    return (
<>
  {/* ======= Footer ======= */}
  <footer id="footer" className="footer">
    <div className="container">
      <div className="row gy-3">
        <div className="col-lg-4 col-md-6 d-flex">
          <i className="bi bi-alt icon" />
          <div>
            <h4>About</h4>
            <p>
            This recipe app includes some beautiful photography.
          The recipe app posts are easy to read, <br />which makes it enjoyable for visitors to find recipes that interest them.
              <br />
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 footer-links d-flex">
          <i className="bi bi-telephone icon" />
          <div>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <button type="submit" className="btn btn-dark">
              Subscribe
            </button>
          </form>
          </div>
        </div>
       
        <div className="col-lg-4 col-md-6 footer-links">
          <h4>Follow Us</h4>
          <div className="social-links d-flex">
            <a href="#" className="twitter">
              <i className="bi bi-twitter" />
            </a>
            <a href="#" className="facebook">
              <i className="bi bi-facebook" />
            </a>
            <a href="#" className="instagram">
              <i className="bi bi-instagram" />
            </a>
            <a href="#" className="linkedin">
              <i className="bi bi-linkedin" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="copyright">
        © Copyright{"2024 "}
        <strong>
          <span>GoRecipe</span>
        </strong>
        . All Rights Reserved. <br/>RacHeaLCODE
      </div>
     
    </div>
  </footer>
  {/* End Footer */}
 
</>


)
}