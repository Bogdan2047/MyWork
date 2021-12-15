import React from "react";
import { Link } from "react-router-dom";
import './header.css';

export const Header = () =>{
    return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <span>ГЛАВНЫЙ</span> 
                <span>ПРОЭКТ</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <Link to="/main" class="nav-link active" aria-current="page" >Главная</Link>
                </li>
                <li class="nav-item">
                <Link to='/portfolio' class="nav-link">Портфолио</Link>
                </li>
                <li class="nav-item">
                <Link to='/about' class="nav-link">О нас</Link>
                </li>
                <li class="nav-item">
                <Link to='/news' class="nav-link">Новости</Link>
                </li>
                <li class="nav-item">
                <Link to='/contact' class="nav-link">Контакты</Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    )
}