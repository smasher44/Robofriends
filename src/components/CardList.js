import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    return (
        <div>
            {
            robots.map((user, i) => { // map() loops each and creates an array
                return (<Card 
                key= {i} 
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email}
                />)
            })  
            }
        </div>    
    );
}


export default CardList;

/* Notes: key prop should have something that doesnt change. For example, index (or i
     in our case) could change if array items get moved. So a better key in this case
     would be something unique like id.
*/