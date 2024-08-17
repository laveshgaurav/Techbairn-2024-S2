type Props = {
  text: string;
  type: "Solid" | "Outline";
  onClick: (id: string) => void;
};

function Button({ text = "Hello", type, onClick }: Props) {
  return (
    <button className={type} onClick={() => onClick("8909953490")}>
      {text}
    </button>
  );
}

export default Button;
