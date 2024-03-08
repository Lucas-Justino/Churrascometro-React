import DeleteApi from "../../RESTApi/DeleteApi";
import Botao from "../../components/Botao/botao";
import Navbar from "../../components/Navbar/navbar";
import database from "../../../database/db.json";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Lista de Churrascos</h1>
      {database.churrasco.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Quantidade de Pessoas</th>
              <th>Carnes</th>
              <th>Pão de Alho</th>
              <th>Carvão</th>
              <th>Refrigerantes</th>
              <th>Cerveja</th>
            </tr>
          </thead>
          <tbody>
            {database.churrasco.map((data: any, index: number) => (
              <tr>
                <td key={index}>{data.data}</td>
                <td>{data.totalPessoas}</td>
                <td>{data.carnes}</td>
                <td>{data.paoDeAlho}</td>
                <td>{data.carvao}</td>
                <td>{data.refrigerantes}</td>
                <td>{data.cerveja}</td>
                <Botao tipo="button" nome="Editar" />
                <Botao tipo="button" nome="Apagar" onClick={DeleteApi} />
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Nenhum churrasco cadastrado</p>
      )}
    </div>
  );
};

export default Home;
