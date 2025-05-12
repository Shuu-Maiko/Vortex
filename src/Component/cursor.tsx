import React, { useState, MouseEvent , useEffect , MouseEventHandler  } from 'react';

interface Coordinates {
  x: number;
  y: number;
}

export default function Cursor(){
    const [coordinates, setCoordinates] = useState<Coordinates>({ x: -100, y: -100 }); // Initialize off-screen
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
    window.addEventListener('mousemove' , (e)=>{
        setCoordinates({x:e.clientX , y:e.clientY});
    })
    }, []);

    return(
    <>
    {coordinates.x  } {coordinates.y }
    <div className= {` absolute cursor-outline size-16 border-white border-2 rounded-4xl  transition-normal duration-500 ease-out  `} style={{left: `${coordinates.x}px` , top: `${coordinates.y}px` ,pointerEvents: 'none'  }}   >
    </div>
    <div className={`absolute  cursor size-4 bg-white rounded-4xl `} style={{left: `${coordinates.x}px` , top: `${coordinates.y}px` , pointerEvents: 'none'}}></div>
    </>
    )
}