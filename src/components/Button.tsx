import { ReactElement } from "react";
import "../styles/components/button.css";
import { IconContext } from "react-icons";

export default function Button(props: props) {
  return (
    <button
      className={`button btn-${props.variant} ${
        props.rounded && "btn-rounded"
      } ${props.elevated && "btn-elevated"} ${props.className} ${
        !props.title && "button-wo-icon"
      }`}
      disabled={props.disabled}
      onClick={
        //@ts-ignore
        () => props.onClick()
      }
    >
      {props.title && props.title}
      {props.icon && (
        <IconContext.Provider value={{ className: "btn-icon" }}>
          {props.icon}
        </IconContext.Provider>
      )}
    </button>
  );
}

interface props {
  variant:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "pending"
    | "danger"
    | "dark"
    | "primary-outline"
    | "secondary-outline"
    | "success-outline"
    | "warning-outline"
    | "pending-outline"
    | "danger-outline"
    | "dark-outline";
  onClick?: Function;
  title?: string;
  disabled?: boolean;
  rounded?: boolean;
  className?: string;
  elevated?: boolean;
  icon?: ReactElement;
}
