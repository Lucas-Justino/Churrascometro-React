import DeleteApi from "../../RESTApi/DeleteApi";
import Botao from "../../components/Botao/botao";
import Navbar from "../../components/Navbar/navbar";

const Home = () => {
    return (
        <div>
            <Navbar/>
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
                        <Botao tipo="button" nome="Apagar" onClick={DeleteApi} />
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    );
};

export default Home;
