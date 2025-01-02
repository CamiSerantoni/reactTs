import { ComponentPropsWithoutRef, FormEvent, forwardRef, useImperativeHandle, useRef } from "react";

type FormProps = ComponentPropsWithoutRef<"form">&{
  onSave: (value: unknown) => void;
};

const Form = forwardRef( function Form({onSave, children, ...otherProps}: FormProps, ref) {

const form = useRef<HTMLFormElement>(null)

/* use this hook to expose some callable functions such a clear method */
useImperativeHandle(ref, ()=>{
  return {
clear(){
  console.log('clear***')
  form.current?.reset()
}
  }
})
  function handleSubmit(event:FormEvent<HTMLFormElement>){
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)
    onSave(data)
 
  }
  return <form onSubmit={handleSubmit}
   {...otherProps} ref={form}>{children}</form>;
})

export default Form;