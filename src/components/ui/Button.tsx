interface Props {
  text ?: string,
  styles ?: string,
  onClick ?: () => void;
}

const Button = ({ text, styles, onClick }: Props) => {
  return (<>
    <button onClick={onClick} className={`bg-primary-gray text-white text-lg rounded-lg px-5 py-4 ${styles}`}>{text}</button>
  </>);
}

export default Button;

