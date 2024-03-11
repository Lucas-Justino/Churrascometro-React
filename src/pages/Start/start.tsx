import React from 'react';
import './start.css'
import Navbar from '../../components/Navbar/navbar';
import arrow_btn from './../../assets/arrow_btn.png'

function Start() {
    return (
    
            <div className='start'>
                <Navbar />
                <div className='start-text'>
                <p>O cálculo ideal</p>
                <p>para o seu churrasco</p>
             </div>
            <div className='star-button'>
            <p>Comece criando aqui</p>
            <img src={arrow_btn} alt="" />

            </div>
         </div>

    );
}

export default Start; 