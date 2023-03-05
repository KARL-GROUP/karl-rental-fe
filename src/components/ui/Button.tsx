interface Props {
  text?: string,
  styles?: string,
  onClick?: () => void;
  svg ?: any,
  type ?: any
}

const Button = ({ text, styles, onClick , svg, type}: Props) => {
  return (<>
    <button type={type} onClick={onClick} className={`bg-[#3F3CD4] text-white text-lg rounded-lg px-5 py-3 flex gap-5 justify-center items-center ${styles}`}>{svg}{text}</button>
  </>);
}

export default Button;



