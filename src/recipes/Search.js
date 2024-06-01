import { useEffect, useState } from "react";
import React from "react";
import Recipe from "./Recipe";
import RecipeIndex from "./RecipeIndex";
 const Search = () =>{
    const [url, setUrl] = useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a");
    const [item, setItem] = useState();
    const [loading, setLoading] = useState(false);
    const [search, setSearch]= useState("")
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>{
           // console.log(data.meals);
            setItem(data.meals);
            setLoading(true);
        })
    }, [url])

    const setIndex=(letter)=>{
        setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
    }

    const searchRecipe=(evt)=>{
        if(evt.key=="Enter"){
            console.log("hello")
            setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        };
   }
    return(

        <>
       <section id="menu" className="menu">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Our Recipe</h2>
          <p>
            Check Our <span>GoRecipe</span>
          </p>
        </div>
            <div className="container">

            <div className="main">
            <div className="heading">
                <h1 className="text-center text-danger">Search Your Recipe</h1>
                
            </div>
            <div className="row">
            <div className="col-md-6 index">
                <RecipeIndex letterIndex={(letter)=>setIndex(letter)}/>
            </div>
            </div>
            <div className="searchbox text-center">
                <input type="search" value={search} placeholder="Enter your search" className="search-bar " 
              onChange={(e)=>setSearch(e.target.value)} onKeyDown={searchRecipe}/>
            </div>
            {
                loading ? <Recipe data={item}/> : "No Recipe Found"}
            </div>
            
        </div>
        </div>
        </section>
        </>
    )
}

export default Search;