import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { Input } from "../../components/Input/input";
import Navbar from "../../components/Navbar/navbar";
import { apiPOST, apiPUT } from "../../services/axios.services";
import { useParams } from "react-router-dom";

interface Inputs {
  id: string;
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
  const { id } = useParams(); // Move a obtenção do id para fora do onSubmit

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    const date = data.data.toLocaleDateString();
    const totalPessoas = data.criancas + data.mulheres + data.homens;
    const carnes = Math.ceil(
      data.criancas * 0.4 + data.mulheres * 0.32 + data.homens * 0.2
    );
    const paoDeAlho = (data.homens + data.mulheres) * 2 + data.criancas;
    const carvao = data.homens + data.mulheres + data.criancas;
    const refrigerantes = Math.ceil(carvao / 5);
    const cerveja = (data.homens + data.mulheres) * 3;

    // console.log(data.id); esse aqui não existe

    if (id) {
      // tem que pegar aqui pra editar
      apiPUT(`churrasco/${id}`, {
        ...data,
        data: date,
        totalPessoas,
        carnes,
        paoDeAlho,
        carvao,
        refrigerantes,
        cerveja,
      });
    } else {
      apiPOST("churrasco", {
        ...data,
        data: date,
        totalPessoas,
        carnes,
        paoDeAlho,
        carvao,
        refrigerantes,
        cerveja,
      });
    }

    reset();
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit(onSubmit)}>
        <label> Homens: </label>
        <Input
          type="number"
          register={register}
          name="homens"
          error={errors.homens}
        />
        <label> Mulheres: </label>
        <Input
          type="number"
          register={register}
          name="mulheres"
          error={errors.mulheres}
        />
        <label> Crianças: </label>
        <Input
          type="number"
          register={register}
          name="criancas"
          error={errors.criancas}
        />
        <label> Data: </label>
        <Input
          type="date"
          register={register}
          name="data"
          error={errors.data}
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
