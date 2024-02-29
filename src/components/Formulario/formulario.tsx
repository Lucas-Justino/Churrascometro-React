import React, { useState } from 'react';
import Botao from '../Botao/botao';
import { Link } from 'react-router-dom';
import Home from '../../pages/Home/home';

const Formulario = () => {
  const [data, setData] = useState('');
  const [quantidadeHomens, setQuantidadeHomens] = useState('');
  const [quantidadeMulheres, setQuantidadeMulheres] = useState('');
  const [quantidadeCriancas, setQuantidadeCriancas] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    console.log('Data:', data);
    console.log('Quantidade de Homens:', quantidadeHomens);
    console.log('Quantidade de Mulheres:', quantidadeMulheres);
    console.log('Quantidade de Crianças:', quantidadeCriancas);
    window.location.href = '/';
  };

  const handleReset = () => {
    setData('');
    setQuantidadeHomens('');
    setQuantidadeMulheres('');
    setQuantidadeCriancas('');
  };

  return (
    <div>
      <Link to={"/"}>Voltar</Link> {/* BOTÃO QUE FAZ VOLTAR PARA A TELA DE APRESENTAÇÃO DOS CHURRASCOS */} 
      <form id="formulario" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="data">Data:</label>
          <input
            type="date"
            id="data"
            value={data}
            onChange={(event) => setData(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="homens">Homens:</label>
          <input
            type="number"
            id="homens"
            value={quantidadeHomens}
            onChange={(event) => setQuantidadeHomens(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="mulheres">Mulheres:</label>
          <input
            type="number"
            id="mulheres"
            value={quantidadeMulheres}
            onChange={(event) => setQuantidadeMulheres(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="criancas">Crianças:</label>
          <input
            type="number"
            id="criancas"
            value={quantidadeCriancas}
            onChange={(event) => setQuantidadeCriancas(event.target.value)}
            required
          />
        </div>
        <Botao tipo="submit" nome="Enviar" />
        <Botao tipo="reset" nome="Limpar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default Formulario;
