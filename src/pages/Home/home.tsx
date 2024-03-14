import { Link } from "react-router-dom";
import './home.css'
import Navbar from '../../components/Navbar/navbar';
import arrow_btn from './../../assets/arrow_btn.png'

function Home() {
    return (
    
            <div className='start'>
                <Navbar />
                <div className='start-text'>
                <p>O cálculo ideal</p>
                <p>para o seu churrasco</p>
             </div>
            <div className='star-button'>
            <p><Link to={"/formulario"}>Comece criando aqui</Link></p>
            <Link to={"/formulario"}><img src={arrow_btn} alt="" /></Link>

            </div>
         </div>

    );
}

export default Home; 