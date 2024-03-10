import { apiDELETE } from "../services/axios.services";

const DeleteApi = () => {
  const funcao = async () => {
    const response = await apiDELETE("churrasco/1");
    console.log(response.data);
  };

  return <button onClick={funcao}>Aperta Aqui: DELETAR</button>;
};

export default DeleteApi;
