import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Input } from "../../components/Input/input";
import Navbar from "../../components/Navbar/navbar";
import "./formulario.css";
import Imagem from "../../assets/cozinheiro1.png";
import { v4 as uuidv4 } from "uuid";
import { useStore } from "../../zustand/useForm/useForm.zustand";

interface Inputs {
  data: Date;
  homens: number;
  mulheres: number;
  criancas: number;
}

const schema = yup
  .object({
    homens: yup.number().min(0).integer().required(),
    data: yup
      .date()
      .min(
        new Date(),
        "Data inválida, o evento precisa ser marcado futuramente"
      )
      .required("Erro na data"),
    mulheres: yup.number().min(0).integer().required(),
    criancas: yup.number().min(0).integer().required(),
  })
  .required();

export default function Formulario() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const {enviarDados} = useStore(); 

  const onSubmit = async (data: Inputs) => {
    const date = data.data;
    const totalPessoas = data.criancas + data.mulheres + data.homens;
    const carnes = Math.ceil(
      data.criancas * 0.4 + data.mulheres * 0.32 + data.homens * 0.2
    );
    const paoDeAlho = (data.homens + data.mulheres) * 2 + data.criancas;
    const carvao = data.homens + data.mulheres + data.criancas;
    const refrigerantes = Math.ceil(carvao / 5);
    const cerveja = (data.homens + data.mulheres) * 3;

    await enviarDados({
      ...data,
      id: uuidv4(),
      totalPessoas,
      carnes,
      paoDeAlho,
      carvao,
      refrigerantes,
      cerveja,
      data: date,
    });
  };
  //Utilizar o Navigate

  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <div className="box">
          <div className="left">
            <img src={Imagem} alt="suaImagem" />
          </div>
          <div className="right">
            <h2>Cadastre aqui</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="formulario-inner">
                <div className="field">
                  <label>Data:</label>
                  <Input
                    type="date"
                    register={register}
                    name="data"
                    error={errors.data}
                  />
                </div>
                <div className="field">
                  <label>Homens:</label>
                  <Input
                    type="number"
                    register={register}
                    name="homens"
                    error={errors.homens}
                  />
                </div>
                <div className="field">
                  <label>Mulheres:</label>
                  <Input
                    type="number"
                    register={register}
                    name="mulheres"
                    error={errors.mulheres}
                  />
                </div>
                <div className="field">
                  <label className="label">Crianças:</label>
                  <Input
                    type="number"
                    register={register}
                    name="criancas"
                    error={errors.criancas}
                  />
                </div>
              </div>
              <div className="button-group">
                <button type="submit" className="botao-enviar">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
