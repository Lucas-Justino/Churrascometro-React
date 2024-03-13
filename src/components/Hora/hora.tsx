import useTime from "../../hooks/useTime/useTime"

const Hora = () => {
    const horaAtual = useTime();

    return(
        <div>
            <h1>
                {horaAtual}
            </h1>
        </div>
    )
}

export default Hora;