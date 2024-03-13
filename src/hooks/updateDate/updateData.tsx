const updateDate = (data: string) => {
  const dataFornecida = new Date(data);

  const dia = ("0" + dataFornecida.getDate()).slice(-2);
  const mes = ("0" + (dataFornecida.getMonth() + 1)).slice(-2);
  const ano = dataFornecida.getFullYear();

  const dataFormatada = dia + "/" + mes + "/" + ano;

  console.log(dataFormatada);
  return dataFormatada;
};

export default updateDate;
