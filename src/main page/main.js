import React from "react";
import './main.css';
import Wow from './wow.jpeg';
import One from './one.jpeg';
import Two from './two.jpeg';
import Tree from './tree.jpeg';
import Photo from './photo.jpeg';
import { Link } from "react-router-dom";

export const Main = () =>{
    return(
        <div className='container'>
            <div className='one-photo'>
                <img src={Wow} alt=''/>
            </div>
            <div className='project'>
                <span>ИЗБРАННЫЕ ПРОЭКТЫ</span>
            </div>
            <div className='block-one'>
                <div className='name-block-one'>
                    <span>ВИЛЛА,</span> 
                    <span>САН-</span>
                    <span>ХУАН</span>
                </div>
                <div className='text-block-one'>
                    <span>Lorem Ipsum - це текст-"риба",</span> 
                    <span>що використовується в друкарстві</span> 
                    <span>та дизайні. Lorem Ipsum є, фактично,</span> 
                    <span>стандартною "рибою" аж з XVI сторіччя,</span> 
                    <span>коли невідомий друкар взяв шрифтову</span>
                    <span>та склав на ній підбірку зразків</span> 
                    <span>"Риба" не тільки успішно пережила</span> 
                    <span>століть, але й прижилася в електронному</span> 
                    <span>верстуванні, залишаючись по суті</span> 
                    <span>Вона популяризувалась в 60-их роках </span> 
                    <span>сторіччя завдяки виданню зразків.</span>
                </div>
                <div className='img-block-one'>
                    <img src={One} alt=''/>
                </div>
            </div>
            <div className='block-two'>
                <div className='text-block-two'>
                    <span>Lorem Ipsum - це текст-"риба",</span> 
                    <span>що використовується в друкарстві</span> 
                    <span>та дизайні. Lorem Ipsum є, фактично,</span> 
                    <span>стандартною "рибою" аж з XVI сторіччя,</span> 
                    <span>коли невідомий друкар взяв шрифтову</span>
                    <span>та склав на ній підбірку зразків</span> 
                    <span>"Риба" не тільки успішно пережила</span> 
                    <span>століть, але й прижилася в електронному</span> 
                    <span>верстуванні, залишаючись по суті</span> 
                    <span>Вона популяризувалась в 60-их роках </span> 
                    <span>сторіччя завдяки виданню зразків.</span>
                </div>
                <div className='img-block-two'>
                    <img src={Two} alt=''/>
                </div>
                <div className='name-block-two'>
                    <span>ДОМ,</span>
                    <span>ПАРИЖ</span>
                </div>
            </div>
            <div className='block-tree'>
                <div className='name-block-tree'>
                    <span>Брау-</span>
                    <span>Хаус,</span>
                    <span>Берлин</span>
                </div>
                <div className='text-block-tree'>
                    <span>Lorem Ipsum - це текст-"риба",</span> 
                    <span>що використовується в друкарстві</span> 
                    <span>та дизайні. Lorem Ipsum є, фактично,</span> 
                    <span>стандартною "рибою" аж з XVI сторіччя,</span> 
                    <span>коли невідомий друкар взяв шрифтову</span>
                    <span>та склав на ній підбірку зразків</span> 
                    <span>"Риба" не тільки успішно пережила</span> 
                    <span>століть, але й прижилася в електронному</span> 
                    <span>верстуванні, залишаючись по суті</span> 
                    <span>Вона популяризувалась в 60-их роках </span> 
                    <span>сторіччя завдяки виданню зразків.</span>
                </div>
                <div className='img-block-tree'>
                    <img src={Tree} alt=''/>
                </div>
            </div>
                <div className='slyder'>
                    <img src={Photo} alt=''/>
                </div>
            <div className='block-slyder'>
                <div className='news'>
                    <span>СВЕЖИЕ НОВОСТИ</span>
                </div>
                <div className='block-news'>
                    <div className='news-one'>
                        <span>01</span>
                        <p>16/12/2022</p>
                        <h1>Існує багато варіацій</h1> 
                        <h1>уривків з Lorem Ipsum,</h1> 
                        <h1>але більшість з них</h1> 
                        <h1>зазнала певних змін на</h1> 
                        <h1>кшталт жартівливих вставок</h1> 
                        <h1>або змішування слів,</h1>
                        <Link to='/news'><button className='btn'>Читать далее</button></Link>
                    </div>
                    <div className='news-two'>
                        <span>02</span>
                        <p>01/02/2022</p>
                        <h1>Існує багато варіацій</h1> 
                        <h1>уривків з Lorem Ipsum,</h1> 
                        <h1>але більшість з них</h1> 
                        <h1>зазнала певних змін на</h1> 
                        <h1>кшталт жартівливих вставок</h1> 
                        <h1>або змішування слів,</h1>
                        <Link to='/news'><button className='btn'>Читать далее</button></Link>
                    </div>
                    <div className='news-tree'>
                        <span>03</span>
                        <p>24/08/2022</p>
                        <h1>Існує багато варіацій</h1> 
                        <h1>уривків з Lorem Ipsum,</h1> 
                        <h1>але більшість з них</h1> 
                        <h1>зазнала певних змін на</h1> 
                        <h1>кшталт жартівливих вставок</h1> 
                        <h1>або змішування слів,</h1>
                        <Link to='/news'><button className='btn'>Читать далее</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}