import React from 'react';

// Card recieves parameters
const Card = ({name,email}) => { // you can destructure the props here
    return (
        <div className = 'bg-light-green dib br3 ma2 grow bw2 shadow-5' >
            {/* <img src ='imgtest.jpg' alt='coder'/> */}
            <div className = 'tc dib ma2'>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
} 


export default Card;














