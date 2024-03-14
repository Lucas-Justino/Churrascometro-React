import Botao from "../../components/Botao/botao";
import Navbar from "../../components/Navbar/navbar";
import database from "../../../database/db.json";
import { apiDELETE } from "../../services/axios.services";
import updateDate from "../../hooks/updateDate/updateData";
import './lista.css'
import Hora from "../../components/Hora/hora";


const Lista = () => {
  return (
    <div className="home-table">
      <Navbar />
      <div className="text-home">
        <h1>Lista do Churrasco</h1>
      </div>
      
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
              <th>Ações</th>

            </tr>
          </thead>
          <tbody>
            {database.churrasco.map((data, index) => (
              <tr key={index}>
                <td>{updateDate(data.data)}</td>
                <td>{data.totalPessoas}</td>
                <td>{data.carnes}</td>
                <td>{data.paoDeAlho}</td>
                <td>{data.carvao}</td>
                <td>{data.refrigerantes}</td>
                <td>{data.cerveja}</td>
                <td>
                  <Botao tipo="button" nome="Editar" onClick={() => window.location.href = `/editar/${data.id}`}></Botao>
                  <Botao tipo="button" nome="Apagar"
                    onClick={() => apiDELETE("churrasco/" + data.id.toString())}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Nenhum churrasco cadastrado</p>
      )}
    <Hora/>
    </div>
  );
};

export default Lista;
