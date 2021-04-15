import React from 'react';
import styled from 'styled-components';

const StyledExp = styled.p`
    max-width: 85%;
    margin-left: 65px;
    display: flex;
    /* flex-direction: column; */
    /* justify-content: center;
    align-content: center;  */
    padding-bottom: 100px;
`
const StyledTitle = styled.h1`
color: #00FF7F;
`
const StyledNames = styled.div`
color: #00FA9A;
`
const StyledImage= styled.img`
border-radius: 10%;
padding-bottom: 5%;
`

const NasaPhotos = props => {
    const { data } = props;
    console.log(data)


    return (
        
        <div>
            <StyledTitle>Check Out NASA's Photo of The Day</StyledTitle>
            <p>Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</p>
            <p>{data.date}</p>
            <div className="image">
            <a href = {data.url}>
                <StyledImage src = {data.url} alt = "nasa POTD" ></StyledImage>
             </a>   
            </div>

            <StyledNames className="title">
            <b>{data.title}</b>
            <br></br>
            <b>Image Credit & Copyright: {data.copyright}</b>
            </StyledNames>

            <div className="explanation">
            <StyledExp><b> Explanation: </b>{data.explanation}</StyledExp>
            </div>
        </div>
    );
}
export default NasaPhotos 