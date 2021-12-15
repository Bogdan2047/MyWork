import React from "react";
import './contacts.css';

export const Contacts = () =>{
    return(
        <div className='container'>
            <div className='connection'>
                <span>СВЯЖИТЕСЬ</span> 
                <span>С НАМИ</span>
            </div>
            <div className='contact'>
                <div className='data'>
                    <div className='name'>
                        <label for="exampleInputEmail1" class="form-label">Имя</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className='email'>
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                </div>
                <div className='number'>
                    <label for="exampleInputEmail1" class="form-label">Номер</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className='message'>
                    <label for="exampleInputEmail1" class="form-label">Добавьте сообщение...</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    <button className='btn'>Отправить</button>
                </div>
            </div>
        </div>
    )
}