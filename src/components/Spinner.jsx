import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Spinner({ size = "text-3xl" }) {
  return (
    <AiOutlineLoading3Quarters
      className={`animate-spin text-primary ${size}`}
    />
  );
}
