import React from "react";

interface BotaoProps {
    tipo: "submit" | "reset" | "button" | undefined;
    nome: string;
    onClick?: () => void;
}

const Botao: React.FC<BotaoProps> = ({ tipo, nome, onClick }) => {
    return (
        <button type={tipo} onClick={onClick}>
            {nome}
        </button>
    );
};

export default Botao;
