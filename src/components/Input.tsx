import { ComponentPropsWithoutRef, forwardRef } from "react";
import Input from "./Input";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

const Input = forwardRef(function Input({ label, id, ...props }: InputProps, ref) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} ref={ref} />
    </p>
  );
});

export default Input;
