import { IoSearchOutline } from "react-icons/io5";
import "../styles/components/search.css";

export default function Search() {
  return (
    <div className="search">
      <input placeholder="Buscar..."></input>
      <IoSearchOutline size={18} />
    </div>
  );
}
