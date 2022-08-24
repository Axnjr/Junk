import React, { useEffect, useState } from "react";
import './App.css';

export default function Videos(){
    let k;
    let v=[];
    const [keyss,setKeyss] = useState([])
    const [loc,setLoc] = useState('US')
    const [val,setVal] = useState([])
    const [constart , setConstart] = useState(1)
    const [conend , setConend] = useState(49)
    const fetchapi = () => {
      let api_key = "AIzaSyAKIqStb_x-AXFvjjPbyPDqDQ_CuhV5zk4";
      let video_http = "https://www.googleapis.com/youtube/v3/videos?";
      let channel_http = "https://www.googleapis.com/youtube/v3/channels?";
      fetch(video_http + new URLSearchParams({
          key: api_key,
          part: 'snippet',
          chart: 'mostPopular',
          maxResults: 50, 
          regionCode: loc,
      }))
      .then(res => res.json())
      .then(data => {
        for(let i=constart;i<conend;i++){
          //k[i] = "https://www.youtube.com/embed/"+data.items[i].id
          //v[i] = data.items[i].snippet.categoryId}
          k = {["https://www.youtube.com/embed/"+data.items[i].id]:data.items[i].snippet.categoryId}
        }
        console.log(k)
        setKeyss(k)//;setVal(v)
        })}

    useEffect(()=>{
      fetchapi();
    },[])


      return(
        <>
            <select id="country" name="country" onChange={(e)=>{
              setLoc(e.target.value);
            }}>
                <option>United States</option>
                <option value="AR">Argentina</option>
                <option value="AU">Australia</option>
                <option value="AT">Austria</option>
                <option value="BS">Bahamas</option>
                <option value="BD">Bangladesh</option>
                <option value="BE">Belgium</option>
                <option value="BT">Bhutan</option>
                <option value="BR">Brazil</option>
                <option value="CN">China</option>
                <option value="CU">Cuba</option>
                <option value="DK">Denmark</option>
                <option value="FR">France</option>
                <option value="GR">Greece</option>
                <option value="IN">India</option>
                <option value="IT">Italy</option>
                <option value="MX">Mexico</option>
                <option value="NZ">New Zealand</option>
                <option value="NO">Norway</option>
                <option value="SG">Singapore</option>
                <option value="CH">Switzerland</option>
                <option value="TH">Thailand</option>
                <option value="UA">Ukraine</option>
                <option value="AE">United Arab Emirates</option>
                <option value="GB">United Kingdom</option>
                <option value="US">United States</option>
            </select>

            <div style={{display:'flex',flexWrap:'wrap',marginLeft:'4rem',marginTop:'1rem'}}>
                {
                   keyss.map((val,id)=>{
                    return(
                        <>
                            <div style={{display:'grid',width:'fit-content',textAlign:'center'}}
                            key="{val}"
                            //</>onMouseEnter={()=>{
                              //setTimeout(()=>{
                                //document.getElementById(id).style.display='flex'
                                //document.getElementById(`${id}frame`).style.transition = "all 1s ease"
                                //document.getElementById(`${id}frame`).style.webkitTransform = "scale(1.1)"
                                //document.getElementById(`${id}frame`).style.transform = "scale(1.1)"
                              //},2000)
                            //}}
                            //onMouseLeave={()=>{
                              //document.getElementById(id).style.display='none'
                              //document.getElementById(`${id}frame`).style.transition = "all 1s ease"
                              //document.getElementById(`${id}frame`).style.webkitTransform = "scale(1)"
                              //document.getElementById(`${id}frame`).style.transform = "scale(1)"

//                            }}
>
                                <iframe src={val} id={id+"frame"} style={{marginInline:'0.5rem',marginBlock:'2rem'}}
                                width='300' height='180' ></iframe>

                                <button id={id} className="hover" style={{width:'90%',height:'2rem',backgroundColor:'#333',
                                  color:'white',border:'none',marginLeft:'1rem',marginBottom:'0.5rem',display:'none',cursor:'pointer'}}>
                                  <svg id="watch" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  <p style={{marginTop:'0.4rem'}}>WATCH LATER IN CLONE</p>
                                </button>

                            </div>
                        </>
                    )
                   })
                }
            </div>
            
        </>
      )
}