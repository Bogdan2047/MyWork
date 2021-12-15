import React from "react";
import { PhotoHouse } from "./photoHouse";
import ImgHouse from './images';
import './portfolio.css';

export const Portfolio = () =>{
    return(
        <div className='container'>
            <div className='portfolio-page'>
                <div className='block-name'>
                    <span>ИЗБРАНЫЕ</span>
                    <span>ПРОЭКТЫ</span>
                </div>
                <div className='container-card'>
                {ImgHouse.map( i =>{
                    return(
                            <PhotoHouse img={i.img} name={i.name} key={i.id} info={i.info} whats={i.whats} place={i.place} age={i.age}/>
                )})}
                </div>
            </div>
        </div>
    )
}