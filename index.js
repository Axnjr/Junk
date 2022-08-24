import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


/** TO FILL JSON USE THIS 
 * const fileData = JSON.stringify(result_vid);
        const blob = new Blob([fileData], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.download = "data.json";
        link.href = url;
        link.click();
 * 

        
 const getData=()=>{
        fetch('data.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }})
          .then((res)=>{return res.json()})
          .then((data)=>{ console.log("conend",conend)
              for(i=constart;i<conend;i++){
                k[i] = "https://www.youtube.com/embed/"+Object.keys(data)[i]
              }
            //k = "," + Object.keys(data)
            //v = Object.values(data)
            setKeyss(k)
            //setVal(v)
        })}

      useEffect(()=>{
        getData();
      },[])*/

