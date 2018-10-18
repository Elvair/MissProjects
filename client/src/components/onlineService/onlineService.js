import React from 'react';


const onlineService = ({params}) => {
    console.log(params)
    return (
        <div>  
            <p>{params.template}</p>
        </div>
    )
}    
export default onlineService;