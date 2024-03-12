import { useState, useEffect } from 'react';

const useTime = () => {
    const [horaAtual, setHoraAtual] = useState<string>("");

    useEffect(() => {
        const intervalId = setInterval(() => {
            const hora = new Date();
            const horaFormatada = hora.toLocaleTimeString();
            setHoraAtual(horaFormatada);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []); 

    return horaAtual;
};

export default useTime;
