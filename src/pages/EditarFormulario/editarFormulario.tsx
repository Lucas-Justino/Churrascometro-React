import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { Input } from "../../components/Input/input";
import Navbar from "../../components/Navbar/navbar";
import { useNavigate, useParams } from "react-router-dom";
import { useStore } from "../../zustand/useForm/useForm.zustand";
import desUpdateData from "../../hooks/desUpdateDate/desUpdateDate";
import './editarFormulario.css'
import Imagem from "../../assets/cozinheiro1.png";


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
  const { id } = useParams();
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const {atualizarDados}  = useStore();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if(!id) return;
    desUpdateData(data);
    const date = data.data;
    const totalPessoas = data.criancas + data.mulheres + data.homens;
    const carnes = Math.ceil(
      data.criancas * 0.4 + data.mulheres * 0.32 + data.homens * 0.2
    );
    const paoDeAlho = (data.homens + data.mulheres) * 2 + data.criancas;
    const carvao = data.homens + data.mulheres + data.criancas;
    const refrigerantes = Math.ceil(carvao / 5);
    const cerveja = (data.homens + data.mulheres) * 3;

    atualizarDados({
      ...data,
      id,
      totalPessoas,
      carnes,
      paoDeAlho,
      carvao,
      refrigerantes,
      cerveja,
      data: date,
    });
    navigate("/lista");
  };

  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <div className="box">
          <div className="left">
            <img src={Imagem} alt="suaImagem" />
          </div>
          <div className="right">
            <h2>Edite o formulário</h2>
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
