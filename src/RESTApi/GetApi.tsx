import { apiGET } from "../services/axios.services"

const GetApi = () =>{

    const funcao = async () =>{
        const response = await apiGET<IChurrasco>('churrasco/2')
        console.log(response.data);
    }
    
    return(
        <button onClick={funcao}>Aperta Aqui</button>
    )
}

export default GetApi;