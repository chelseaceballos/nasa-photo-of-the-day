import React from 'react'

const NasaPhotos = props => {
    const { data } = props;
    console.log(data)


    return (
        <div>
            <p>{data.date}</p>
            <div className="image">
            <a href = {data.url}>
                <img src = {data.url}></img>
             </a>   
            </div>
            
            <div className="title">
            <b>{data.title}</b>
            <br></br>
            <b>Image Credit & Copyright: {data.copyright}</b>
            </div>

            <div className="explanation">
            <p><b> Explanation: </b>{data.explanation}</p>
            </div>
        </div>
    );
}
export default NasaPhotos

// import react from 'react'

// pass in props 
    //const NasaPhotos = props => { 
    //     const {data} = props;
    // }

// return with data being rendered 

// export default NasaPhotos