
type  InputProps = {
    label:string
    id:string
} 

export default function Input({label, id, ...props}: InputProps){
    return(
        <p>
          <label htmlFor={id}>
   {label}
          </label>
        <input id={id} {...props} />
        </p>
    )
} 