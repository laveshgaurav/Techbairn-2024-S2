type Props = {
  text: string;
  type: "Solid" | "Outline";
  onFetchData: (id: string) => void;
};

function Button({ text = "Hello", type, onFetchData }: Props) {
  return (
    <button className={type} onClick={() => onFetchData("8909953490")}>
      {text}
    </button>
  );
}

export default Button;
