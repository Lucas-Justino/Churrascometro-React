import React from 'react';
import useTime from './hooks/useTime/useTime';


const Hora: React.FC = () => {
    const horaAtual = useTime();
    return (
        <div>
            <h1>
                {horaAtual}
            </h1>
        </div>
    );
};

export default Hora;
