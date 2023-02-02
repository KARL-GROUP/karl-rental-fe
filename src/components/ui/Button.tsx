interface Props {
  children: string,
  styles: string,
  onClick: () => void;
}

const Button = ({ children, styles, onClick }: Props) => {
  return (<>
    <button onClick={onClick} className={`bg-primary-gray text-white text-lg rounded-lg px-5 py-4 ${styles}`}>{children}</button>
  </>);
}

export default Button;

