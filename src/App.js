import React, {useState, useEffect} from "react"; // 
import "./App.css";

//install and import axios from node
import axios from 'axios'
//import all things from components✅
import Home from './components/home'
import NasaPhotos from './components/NasaPhotos'




function App() {
  const [data, setData] = useState('New useState here 👋')
  useEffect (() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=8fECZceSTSkNpYGLV5dTD88dcCeKj1MAXRRO3bAk')
    .then ((response) => {
      setData(response.data)
    })
    .catch((error)=> {
      console.log(error)
    })
  }, [])
  
  
  return (
  <div className='App'>
    {Home()}
    {NasaPhotos ({'data':data}) }
  </div>
  );
}

export default App;
//👷‍♀️ STEP 1 BUILD COMPONENTS IN NEW FOLDER, ---> home.js,  NasaPhotos.js
      //home will hold your header📝
      //NasaPhotos will hold content and its layout via "html"📝

//STEP 2  INSTALL AXIOS, IMPORT AXIOS/ LINE 5
       // npm install axios, if not in json📝

//STEP 3 SET STATE, AND USE EFFECT IN REACT IMPORT/ LINE 1

//STEP 4 IMPORT COMPONENTS FROM FOLDER INTO APP.JS LINE 6-8
        // delete what is inside of return, want to start fresh, we don't want to see the "go read readme" message!📝

// STEP 5 set a state inside the function it can be anything just set it, it could be an empty array [], or null / line 14

//STEP 6 make promise in order to axios.get (linkurl) 
      // make a promise, but remember they must be made inside an useEffect with an empty array after .catch📝 // line 15-23

//👷‍♀️ STEP 7 add context to the 'return / lines 29-29

// now that the data is at our hands move onto home.js and NasaPhotos.js for next steps
