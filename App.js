import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Link } from "react-router-dom";
import Videos from './Vids';
import Category from './Category';

export default function App() {
  return (
    <>
      <div>
        
          <div style={{backgroundColor:'white',width:'95%',height:'5rem',position:'absolute',top:'0%',marginLeft:'3rem'}}>
            <a href="/admin" style={{display:'flex',position:'absolute',top:'0%',left:'3%'}}>
              <h1 style={{fontSize:'2rem',color:'black'}}>YouTubeClone</h1>
            </a>
            
            <svg xmlns="http://www.w3.org/2000/svg" className="svg" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>   
          </div> 

          <Category/>

          <div id='sidebar'>
              <svg xmlns="http://www.w3.org/2000/svg" className="home" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <br/>
              <svg xmlns="http://www.w3.org/2000/svg" className='home' style={{top:'40%'}} viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0V0z"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"/>
              </svg>
              <br/>
              <svg xmlns="http://www.w3.org/2000/svg" className='home' style={{top:'65%',fill:'white'}} viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0V0z"/><path d="M8 16h12V4H8v12zm2-7h3V6h2v3h3v2h-3v3h-2v-3h-3V9z" opacity=".3"/><path d="M4 22h14v-2H4V6H2v14c0 1.1.9 2 2 2zM8 2c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H8zm12 14H8V4h12v12zm-7-2h2v-3h3V9h-3V6h-2v3h-3v2h3z"/>
              </svg>
          </div>      
          
          <Videos/>
      </div>
    </>
  );
}

//<button id='sign' style={{right:'24%'}}><a href='/log'>Login</a></button>
/**{
                heads.map((cat,id)=>{
                  return(
                    <>
                      <Link to="/Category">
                        <div style={{Width:'fit-content',height:'auto',borderRadius:'16px',whiteSpace:'nowrap',backgroundColor:'#333',padding:'8px',marginLeft:'1rem'}}>
                          {cat}
                        </div>
                      </Link>
                    </>
                  )
                })
              }
               */