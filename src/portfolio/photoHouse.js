import React from "react";
import './photohouse.css'

export const PhotoHouse = (props) =>{
    return(
        <div className='card-container'>
            <div className='block-photo'>
                    <img src={props.img} alt=''/>
            </div>
        </div>
    )
}