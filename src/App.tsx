import Button from "./components/Button";
import TextInput from "./components/TextInput";
import { IoHeart, IoAt } from "react-icons/io5";
import Select from "react-select";
import Dashboard from "./layouts/Dashboard";

export default function App() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return <Dashboard></Dashboard>;
}
