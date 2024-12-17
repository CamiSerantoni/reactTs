import { type ReactNode, type ElementType, type ComponentPropsWithoutRef } from "react"

type ContainerProps = {
  as: ElementType
  children: React.ReactNode
} & ComponentPropsWithoutRef<>

export default  function Container({as, children}: ContainerProps) {
  const Component  = as; 
  return <Component> {children}</Component>
}
