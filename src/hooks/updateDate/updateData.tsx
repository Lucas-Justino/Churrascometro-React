interface Inputs {
  data: Date;
  homens: number;
  mulheres: number;
  criancas: number;
}

const updateDate = (data: Inputs) => {
  const dataFornecida = new Date(data.data);

  const dia = ("0" + dataFornecida.getDate()).slice(-2);
  const mes = ("0" + (dataFornecida.getMonth() + 1)).slice(-2);
  const ano = dataFornecida.getFullYear();

  const dataFormatada = dia + "/" + mes + "/" + ano;

  console.log(dataFormatada);
  return dataFormatada;
};

export default updateDate;
