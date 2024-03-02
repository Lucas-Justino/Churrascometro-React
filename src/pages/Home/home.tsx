import Botao from "../../components/Botao/botao";

const Lista = () => {
    return (
        <div>
            <h1>Lista de Churrascos</h1>
            <table>
                <thead>
                    <tr>
                        <th>Quantidade de Pessoas</th>
                        <th>Carnes</th>
                        <th>Pão de Alho</th>
                        <th>Carvão</th>
                        <th>Refrigerantes</th>
                        <th>Cerveja</th>
                        <Botao tipo="button" nome="Editar" />
                        <Botao tipo="button" nome="Apagar" />
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    );
};

export default Lista;
