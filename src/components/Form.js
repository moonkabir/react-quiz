import Classes from "../styles/Form.module.css";
export default function Form({ children, className, ...rest }) {
  return (
    <form className={`${className} ${Classes.form}`} action="#" {...rest}>
      {children}
    </form>
  );
}
