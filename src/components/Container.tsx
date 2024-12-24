import { type ReactNode, type ElementType, type ComponentPropsWithoutRef } from "react"

type ContainerProps<T extends ElementType> = {
  as?: T
  children: React.ReactNode
} & ComponentPropsWithoutRef<T>

export default  function Container<C extends ElementType>({as, children}: ContainerProps<C>) {
  const Component  = as ||'div'; 
  return <Component> {children}</Component>
}
