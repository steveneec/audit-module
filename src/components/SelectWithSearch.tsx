import Select from "react-select";

export default function SelectWithSearch(props: props) {
  return <Select options={props.options} className="selector" />;
}

interface props {
  options: { value: string; label: string }[];
}
