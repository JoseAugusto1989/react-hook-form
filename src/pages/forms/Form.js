import { Title } from "./Form.style";
import { yupResolver } from "@hookform/resolvers/yup";

import FormLogo from "../../assets/form-logo.png";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../components/inputs/InputField";
import { InputFields } from "../../data/InputFields";

const schema = yup
  .object({
    name: yup.string().required("O nome é obrigatório"),
    email: yup
      .string()
      .email("Digite um email válido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(6, "A senha deve ter no mínimo 6 dígitos")
      .required("A senha é obrigatória"),
    confirmPassword: yup
      .string()
      .required("Confirmar a senha é obrigatório")
      .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
  })
  .required();

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // console.log(watch("name"));

  const onSubmit = (userData) => {
    console.log(userData);
  };

  const password = watch("password");

  //  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Title>Formulário</Title>

      <img src={FormLogo} alt="imagem-logo" />

      {InputFields.map((field, index) => (
        <InputField
          key={field.name + index}
          name={field.name}
          label={field.label}
          type={field.type}
          disabled={field.name === "confirmPassword" ? !password : false}
          register={register}
          errors={errors}
        />
      ))}
      <button type="submit">Cadastrar</button>
    </form>
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <img src={FormLogo} alt="imagem-logo"></img>

    //   <label>
    //     Nome
    //     <input {...register("name", { required: true })}></input>
    //     <span>{errors.name?.message}</span>
    //   </label>

    //   <label>
    //     Email
    //     <input {...register("email")}></input>
    //     <span>{errors.email?.message}</span>
    //   </label>

    //   <label>
    //     Senha
    //     <input type="password" {...register("password")}></input>
    //     <span>{errors.password?.message}</span>
    //   </label>

    //   <label>
    //     Confirmar Senha
    //     <input type="password" {...register("confirmPassword")}></input>
    //     <span>{errors.confirmPassword?.message}</span>
    //   </label>

    //   <button type="submit">Cadastrar</button>
    // </form>
  );
};

export default Form;
