interface Props {
  text?: string,
  styles?: string,
  onClick?: () => void;
}

const Button = ({ text, styles, onClick }: Props) => {
  return (<>
    <button onClick={onClick} className={`bg-[#3F3CD4] text-white text-lg rounded-lg px-5 py-3 ${styles}`}>{text}</button>
  </>);
}

export default Button;



