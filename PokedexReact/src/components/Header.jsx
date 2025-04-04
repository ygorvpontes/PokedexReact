import React from "react";
import img from "./img/images.png"

function Header(){
    return(
        <>
        <header>
            <img src={img}/>
            <div>
                <h1>Pokedex</h1>
                <h2>1°Gen</h2>
            </div>
        </header>
        </>  
    );

}
export default Header