import { apiPOST } from "../services/axios.services"

const PostApi = () =>{

    const data = {  //PEGAR DO FORMULARIO
        qtdHomens: 5,
        qtdMulheres: 10,
        qtdCriancas: 12,
    }

    const funcao = async () =>{
        const response = await apiPOST<IChurrasco>('churrasco', data)
        console.log(response.data);
    }
    
    return(
        <button onClick={funcao}>Aperta Aqui: POSTAR</button>
    )
}

export default PostApi;