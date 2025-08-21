import { cn } from "../utils/cn"

const Section = ({ children, className = "", containerClassName = "", id, as: Component = "section", ...props }) => {
  return (
    <Component id={id} className={cn("section-padding", className)} {...props}>
      <div className={cn("container-custom", containerClassName)}>{children}</div>
    </Component>
  )
}

export default Section
