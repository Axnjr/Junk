import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Link } from "react-router-dom";
//import Choice from "./Choice";

export default function Category(){
    let categories = {'Film & Animation':1,'Autos & Vehicles':2,'music':10,'pets & animal':15,'sports':17,'short movies':18,'travel & events':19,'gaming':20,'blogging':21,'people & blogs':22,'comedy':23,'entertaiment':24,'news & politics':25,'style':26,'education':27,'science':28,'nonprofit & activism':29,'movies':30,'anime & animation':31,'action & adventure':32,'classic':33,'comedy':34,'documentry':35,'drama':36,'family':37,'foreign':38,'horor':39,'sci-fi & fantasy':40,'thriller':41,'shorts':42,'shows':43,'trailers':44 }
    let heads = Object.keys(categories)
    return(
        <>
            <Router>
            <div style={{display:'flex',marginTop:'9rem',marginLeft:'4rem',overflowX:'scroll',paddingBottom:'2rem',color:'white'}}>
              {heads.map((val,id)=>{
                return(
                  <Link to="/Category">
                        <div style={{Width:'fit-content',height:'auto',borderRadius:'16px',whiteSpace:'nowrap',backgroundColor:'#333',padding:'8px',marginLeft:'1rem'}}>
                          {val}
                        </div>
                  </Link>
                )
              })}
            </div>
            <Routes>
                <Route path="/Category" element={<Category/>}/>
            </Routes>
          </Router>
        </>
    )
}
