import React, {useState, useEffect} from "react"; // 
import "./App.css";

//install and import axios from node
import axios from 'axios'
//import all things from components✅
import NasaPhotos from './components/NasaPhotos'
import styled from 'styled-components';


const StyledNasa = styled.div`
  color: #fff;
  background-color: #778899 ;
`

function App() {
  const [data, setData] = useState('New useState here 👋')
  useEffect (() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=XHgOW6KlgqBCFVgNyF3tGFp7OkWtJnng1PLvYyeY')
    .then ((response) => {
      setData(response.data)
    })
    .catch((error)=> {
      console.log(error)
    })
  }, [])


  return (
  <StyledNasa className='App'>
  {NasaPhotos ({'data':data}) }
</StyledNasa>
);
}

export default App;