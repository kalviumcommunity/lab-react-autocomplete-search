import React, { useEffect, useState } from "react";
import countryData from "../resources/countryData";

const Home = () => {

    let [result,updateResult]=useState([])

    let newInput=(e)=>{
        let input=e.target.value
        // console.log(input)
        if(input===""){
            updateResult([]);
            return;
        } 
        input=input.toLowerCase()
        updateResult(countryData.filter(elt=>elt.name.toLowerCase().startsWith(input)))
    }

    // console.log(result)
    
    let escapeHandler=(e)=>{
        // console.log(e.key)
        if(e.key==="Escape"){
            updateResult([]);
        }
    }

    useEffect(()=>{
        window.addEventListener("keydown",escapeHandler)
    },[])

    return (
        <div>
            <h1>Search</h1>
            <input type="text" onChange={newInput}/>
            <div className="result">
                {result.map(elt=>{
                    return <div key={elt.code}>{elt.name}</div>
                })}
            </div>
        </div>
    );
};

export default Home;
