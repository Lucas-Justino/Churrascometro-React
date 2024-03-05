import { apiPUT } from "../services/axios.services"

const PutApi = () =>{

    const data = {  //PEGAR DO FORMULARIO
        qtdHomens: 60,
        qtdMulheres: 60,
        qtdCriancas: 60,
    }

    const funcao = async () =>{
        const response = await apiPUT<IChurrasco>('churrasco/50f8', data) //O 2 É O ID 
        console.log(response.data);
    }
    
    return(
        <button onClick={funcao}>Aperta Aqui: PUT</button>
    )
}

export default PutApi;