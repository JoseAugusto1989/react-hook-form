import { Label, Input } from "./InputField.style";
import { Span } from "./InputField.style";

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
      <Span>{errors[name]?.message}</Span>
    </Label>
  );
};

export default InputField;
