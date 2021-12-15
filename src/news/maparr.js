import React from "react";
import { News } from "./news";
import Newsarr from "./newsarr";

export const Maparr = () =>{
    return(
        <div className='map'>
            {Newsarr.map((i)=>{
            return(
                <News img={i.img} article={i.article} p={i.p} key={i.id}/>
            )})}
        </div>
    );
};