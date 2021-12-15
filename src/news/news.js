import React from "react";
import Admin from './admin.png';
import './news.css';

export const News = (props) => {
    console.log(props)
    return(
        <div className='container'>
            <div className="card">
                <div className="card-body" key={props.key}>
                <blockquote className="blockquote mb-0">
                    <img src={props.img} alt=''/>
                    <p>{props.article}</p>
                    <footer className="blockquote-footer">
                        <div className='block-icon'>
                            <img src={Admin} alt=''/>
                            <span>Admin</span>
                        </div>
                        <div className='post'>
                            <span>{props.p}</span>
                        </div>
                    </footer>
                </blockquote>
                </div>
            </div>
      </div>
    )
}