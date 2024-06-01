import React from "react";

const RecipeIndex = ({letterIndex}) => {
    const letter = ["A", "B", "C", "D","E", "F", "G", "H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
   var num = 0;
    return(
        <>{
            letter.map(item=>{
                return(
                    <div className="numBox" key={num++} onClick={()=>letterIndex(item)}>
                        <h3 className="letter">{item}</h3>
                    </div>
                )
            })
        }
        
        </>
    )
}

export default RecipeIndex;