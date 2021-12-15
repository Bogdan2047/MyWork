import React from "react";
import './about.css';
import Eminem from './eminem.jpeg';
import Ronaldo from './ronaldo.jpeg';
import Messi from './messi.jpeg';
import Willsmith from './willsmith.jpeg';

export const About = () => {
    return(
        <div className='container'>
            <div className='about'>
                <div className='about-us'>
                        <span>О НАС</span>
                </div>
                <div className='text-about-us'>
                    <span>Это текст. Нажмите один раз и выберите</span>
                    <span>«Редактировать текст» или просто кликните дважды,</span> 
                    <span>чтобы добавить свой текст и настроить шрифт.</span> 
                    <span>Вы можете переместить его в любое место на</span> 
                    <span>странице. Расскажите посетителям сайта о себе.</span>
                    <span>Здесь будет удачно смотреться текст о вашей</span>
                    <span>компании и услугах. Используйте эту возможность,</span> 
                    <span>чтобы выгодно представить себя и свою компанию</span> 
                    <span>клиентам. Расскажите интересную историю, например,</span> 
                    <span>как вам в голову пришла идея собственного дела,</span> 
                    <span>и объясните, в чем заключается ваше преимущество</span> 
                    <span>перед конкурентами. Приводите увлекательные факты</span> 
                    <span>и цифры. Не забудьте про ключевые слова, по</span> 
                    <span>которым ваш сайт найдут в поисковых системах.</span> 
                    <span>Чтобы добавить свое фото, нажмите на изображение</span> 
                    <span>и выберите «Заменить фото»</span>
                </div>
            </div>
            <div className='goals'>
                <div className='goals-us'>
                    <span>ЦЕЛИ</span>
                </div>
                <div className='text-goals'>
                    <span>Это текст. Нажмите один раз и выберите</span> 
                    <span>«Редактировать текст» или просто кликните</span>
                    <span>дважды, чтобы добавить свое содержание и</span> 
                    <span>настроить шрифт. Текстовый блок можно</span> 
                    <span>перетащить в любое место на странице. Расскажите</span> 
                    <span>посетителям сайта о себе подробнее, например,</span> 
                    <span>как вам пришла в голову идея бизнеса.</span>
                </div>
            </div>
            <div>
                <div className='partners'>
                    <div className='first-row'>
                        <div className='first-partner'>
                            <img src={Eminem} alt=''/>
                            <span>Eminem</span>
                            <span>Репер</span>
                        </div>
                        <div className='second-partner'>
                            <img src={Ronaldo} alt=''/>
                            <span>Ronaldo</span>
                            <span>Футболист</span>
                        </div>
                    </div>
                    <div className='second-row'>
                        <div className='tree-partner'>
                            <img src={Messi} alt=''/>
                            <span>Messi</span>
                            <span>Футболист</span>
                        </div>
                        <div className='four-partner'>
                            <img src={Willsmith} alt=''/>
                            <span>Will Smith</span>
                            <span>Актер</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}