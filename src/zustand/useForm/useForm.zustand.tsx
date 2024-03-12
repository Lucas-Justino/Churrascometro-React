import create from 'zustand';
import { apiPOST } from '../../services/axios.services';
import IData from '../../interfaces/IData.interface';

interface Store {
  dadosChurrasco: IData[];
  enviarDados: (dados: IData) => void; // Alterado para retornar uma Promise
}

const useStore = create<Store>((set) => ({
  dadosChurrasco: [],
  enviarDados: async (dados) => {
    try {
      console.log(dados);
      const response = await apiPOST('churrasco', dados);
      if (response.status !== 200) {
        throw new Error('Erro ao enviar os dados');
      }
      set((state) => ({
        dadosChurrasco: [...state.dadosChurrasco, dados],
      }));
    } catch (error) {
      console.error(error);
    }
  },
}));

export { useStore };