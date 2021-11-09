import React from 'react';


const Searchbox = ({onsearchChange}) => {
    return(
        <div className='pa2'>
           <input 
                className='tc pa2 ba b--green bg-lightest-blue' 
                type='search' 
                placeholder='search robots'
                onChange={onsearchChange}  
            /> 
        </div>
    );
}

export default Searchbox;

/* At line 11, everytime there's a change in onChange the method 'onsearchange' is being called
    with 'event' parameter

*/