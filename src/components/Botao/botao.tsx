import React from "react";

interface BotaoProps {
    tipo: "submit" | "reset" | "button" | undefined;
}

const Botao: React.FC<BotaoProps> = ({ tipo }) => {
    return (
        <button type={tipo}>Enviar</button>
    );
};

export default Botao;
