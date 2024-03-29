import create from 'zustand';
import { apiPOST, apiPUT } from '../../services/axios.services';
import IData from '../../interfaces/IData.interface';

interface Store {
  dadosChurrasco: IData[];
  enviarDados: (dados: IData) => void;
  atualizarDados: (dados: IData) => void;
}

const useStore = create<Store>((set) => ({
  dadosChurrasco: [],
  enviarDados: async (dados) => {
    try {
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
  atualizarDados: async (dados) => {
    try {
      dados.data.toLocaleDateString 
      const response = await apiPUT(`churrasco/${dados.id}`, dados);
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