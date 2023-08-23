import "../styles/components/toolbar.css";
import Breadcrums from "./Breadcrums";
import Search from "./Search";

export default function Toolbar() {
  return (
    <div className="toolbar">
      <Breadcrums />
      <div className="tools">
        <Search />
      </div>
    </div>
  );
}
