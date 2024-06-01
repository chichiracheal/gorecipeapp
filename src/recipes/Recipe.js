
import React from "react";

 const Recipe = ({data}) =>{
    console.log(data)
   
    return(
        <>
       
    
        <ul
          className="nav nav-tabs d-flex justify-content-center"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <li className="nav-item">
            <a
              className="nav-link active show"
              data-bs-toggle="tab"
              data-bs-target="#menu-starters"
            >
              <h4>Starters</h4>
            </a>
          </li>
          {/* End tab nav item */}
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#menu-breakfast"
            >
              <h4>Breakfast</h4>
            </a>
            {/* End tab nav item */}
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#menu-lunch"
            >
              <h4>Lunch</h4>
            </a>
          </li>
          {/* End tab nav item */}
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#menu-dinner"
            >
              <h4>Dinner</h4>
            </a>
          </li>
          {/* End tab nav item */}
        </ul>
        <hr />
         {
            (!data) ? "Not Available" : data.map(item=>{
                return(
                    
        <div className="tab-content" data-aos="fade-up" data-aos-delay={300}>
        <div className="tab-pane fade active show" id="menu-starters">
          
          <div className="row gy-5">
            <div className="col-md-4 my-5 menu-item">
              <a href="#" className="glightbox">
                <img
                  src={item.strMealThumb}
                  className="menu-img img-fluid"
                  alt={item.strMeal}
                />
                
              </a>
              <a
              href={item.strYoutube}
              className="glightbox btn-watch-video align-items-center"
            >
              <i className="bi bi-play-circle" />
              <span >Watch Video</span>
            </a>
              <h4>{item.strMeal}</h4>
              </div>
             <div className="col-md-8 my-5 menu-item">
             <h4 className="text-warning">Meal Category : {item.strCategory}</h4>
             <p className="ingredients">
              {item.strInstructions}
             
              </p>
                    
              <a href={"https:/www.themealdb.com/meal/" + item.idMeal} target="_blank" className="btn btn-danger"> Ingredients</a>
              </div>
              <hr />
             </div>
             </div>
             </div>
             
                   
                )
            })
           
        }
         
        
        
     
   
                    
       
       
        </>
        
    )
}
export default Recipe;