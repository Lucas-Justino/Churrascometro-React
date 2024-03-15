import { useState, useEffect } from "react";
import Botao from "../../components/Botao/botao";
import Navbar from "../../components/Navbar/navbar";
import { apiDELETE, apiGET } from "../../services/axios.services";
import updateDate from "../../hooks/updateDate/updateData";
import './lista.css'

interface ChurrascoData {
  id: number;
  data: string;
  totalPessoas: number;
  carnes: string;
  paoDeAlho: string;
  carvao: string;
  refrigerantes: string;
  cerveja: string;
}

const Lista = () => {
  const [churrascoData, setChurrascoData] = useState<ChurrascoData[]>([]);

  useEffect(() => {
    const fetchChurrascoData = async () => {
      try {
        const response = await apiGET<ChurrascoData[]>("churrasco");
        setChurrascoData(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados do churrasco:", error);
      }
    };

    fetchChurrascoData();
  }, []);

  return (
    <div className="home-table">
      <Navbar />
      <div className="text-home">
        <h1>Lista do Churrasco</h1>
      </div>
      <div className="table-wrapper">
      {churrascoData.length > 0 ? (
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
            {churrascoData.map((data, index) => (
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
                  <Botao tipo="button" nome="Apagar" onClick={() => handleDelete(data.id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Nenhum churrasco cadastrado</p>
      )}
       </div>
    </div>
  );

  async function handleDelete(id: number) {
    try {
      apiDELETE("churrasco/" + id.toString())
      setChurrascoData(churrascoData.filter(item => item.id !== id));
    } catch (error) {
      console.error("Erro ao deletar churrasco:", error);
    }
  }
};

export default Lista;
