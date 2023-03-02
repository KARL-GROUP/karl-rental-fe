interface Props {
  text?: string,
  styles?: string,
  onClick?: () => void;
  svg ?: any
}

const Button = ({ text, styles, onClick , svg}: Props) => {
  return (<>
    <button onClick={onClick} className={`bg-[#3F3CD4] text-white text-lg rounded-lg px-5 py-3 flex gap-5 justify-between items-center ${styles}`}>{svg}{text}</button>
  </>);
}

export default Button;



