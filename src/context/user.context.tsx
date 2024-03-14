import { createContext, useContext, useState } from "react";
import IData from "../interfaces/IData.interface";
import { apiPOST, apiPUT } from "../services/axios.services";

// Primeira etapa: Criar a interface
interface IChurrascoContext {
  dadosChurrasco: IData[];
  enviarDados: (dados: IData) => void;
  atualizarDados: (dados: IData) => void;
  //colocamos value pra não ter divergência com o setName da linha 21, já que ele estará observando o name
}

// Segunda etapa: Definir valores padrões
const CHURRASCO_DEFAULT_VALUES = {
  dadosChurrasco: [],
  enviarDados: () => null,
  atualizarDados: () => null,
};

// Início do contexto, a criação do contexto
const ChurrascoContext = createContext<IChurrascoContext>(
  CHURRASCO_DEFAULT_VALUES
);

interface IChurrascoProvider {
  children: React.ReactNode;
}

// Criação do provider
// É o coração do contexto, toda a lógica
const ChurrascoProvider = ({ children }: IChurrascoProvider) => {
  // adicionar o parâmetro children
  const [dadosChurrasco, setDadosChurrasco] = useState<IData[]>([]);

  const enviarDados = async (dados: IData) => {
    try {
      const response = await apiPOST("churrasco", dados);
      if (response.status !== 200) {
        throw new Error("Erro ao enviar os dados");
      }
      setDadosChurrasco((previous) => [...previous, dados]);
    } catch (error) {
      console.error(error);
    }
  };

  const atualizarDados = async (dados: IData) => {
    try {
      dados.data.toLocaleDateString;
      const response = await apiPUT(`churrasco/${dados.id}`, dados);
      if (response.status !== 200) {
        throw new Error("Erro ao enviar os dados");
      }
      setDadosChurrasco((previous) => [...previous, dados]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ChurrascoContext.Provider
      value={{ dadosChurrasco, enviarDados, atualizarDados }}
    >
      {children}
    </ChurrascoContext.Provider>
  );
};

// O contexto usa a criação base
const useUser = () => useContext(ChurrascoContext);

export { ChurrascoProvider, useUser };

// Após isso, iremos exportar pra onde esta as rotas
