interface Inputs {
  data: Date;
  homens: number;
  mulheres: number;
  criancas: number;
}

function desUpdateData(data: Inputs) {
  const dataFornecida = new Date(data.data);

  const dia = dataFornecida.getDate();
  const mes = dataFornecida.getMonth() + 1;
  const ano = dataFornecida.getFullYear();

  const dataFormatada = new Date(ano, mes - 1, dia);

  return dataFormatada;
}

export default desUpdateData;
