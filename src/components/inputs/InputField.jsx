import { Label, Input } from "./InputField.style";

const InputField = ({
  label,
  name,
  type,
  disabled = false,
  register,
  errors,
  className,
  otherProps,
}) => {
  return (
    <Label className={className} {...otherProps}>
      {label}
      <Input
        type={type}
        {...register(name, { required: true })}
        disabled={disabled}
      />
      <span>{errors[name]?.message}</span>
    </Label>
  );
};

export default Input;
