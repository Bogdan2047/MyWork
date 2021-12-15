import React from "react";
import './footer.css';

export const Footer = () => {
    return(
        <div className='footer-block'>
            <div className='footer-text-one'>
                <span>БУДЕМ</span> 
                <span>НА СВЯЗИ</span>
            </div>
            <div className='footer-text-two'>
                <span>ул. Берлин 1а, Берлин, 11222, Германия</span>
                <span>Т +380500000000,+380950000000</span>
                <span>мой проэкт 2022</span>
            </div>
            <div className='footer-text-tree'>
                <span>Соц сети</span>
            </div>
        </div>
    )
}