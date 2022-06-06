import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import FormLogo from "../../assets/form-logo.png";
import { Title } from "./Form.style";

import InputField from '../../components/input/InputField'
import { inputFields } from "../../data/inputFields";

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

  const onSubmit = values => {
    console.log(values)
  }

  const password = watch('password')

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Title>Form</Title>
      
      <img src={FormLogo} alt="imagem-logo" />

      {inputFields.map((field, index) => 
        <InputField 
          key={field.name+index}
          name={field.name}
          label={field.label}
          type={field.type}
          disabled={field.name === "confirmPassword" ? !password : false}
          register={register} 
          errors={errors} 
        />
      )}
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default Form;
