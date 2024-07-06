'use client';
import React, { useEffect } from 'react';
import * as d3 from 'd3';

const PracticeSVG=()=> {
     
    
    useEffect(() => { 
        const selectedElement = d3.select('.my-class');
        console.log({selectedElement});
        selectedElement.style('color', 'red');
        const selectedElementP = d3.select('p');
        console.log({selectedElementP});
        selectedElementP.style('color', 'blue');
    }, [])
        
    return (

        <div>
            <h1>hello Harshit!!</h1>
            <p>First</p>
            <p>Second</p>
            <div className='my-class'>Hello 1</div>
            <div className='my-class'>Hello 2</div>
            <div className='my-class'>Hello 3</div>
            <svg width={100} height={100} style={{border: "1px solid red"}}>
                <path
                    d= "M25,25 L25,35
                        M75,25 L75,35
                        M15,75 C20,100 80,100 85,75 "
                    stroke="blue"
                    stroke-width="3"
                    fill="none"
                
                />
                
            </svg>
            
        </div>
    );
}

export default PracticeSVG;