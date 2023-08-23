import { ReactElement } from "react";
import "../styles/components/text-input.css";
import { IconContext } from "react-icons";

export default function TextInput(props: props) {
  return (
    <div className={`ti-container ${props.className}`}>
      {props.label && (
        <label className="ti-label" htmlFor={props.id}>
          {props.label}
        </label>
      )}
      <div className={`ti-content ${props.rounded && "ti-rounded"}`}>
        {props.icon && (
          <div className="ti-icon-container">
            <IconContext.Provider value={{ className: "ti-icon", size: "18" }}>
              {props.icon}
            </IconContext.Provider>
          </div>
        )}

        <input
          id={props.id}
          type={`${props.password ? "password" : "text"}`}
          disabled={props.disabled}
          className={`input`}
          placeholder={props.placeholder}
          required={props.required}
          value={props.value}
          onChange={({ target }) => props.onTextChange(target.value)}
        />
      </div>

      {props.helpText && <p className="ti-help-text">{props.helpText}</p>}
    </div>
  );
}

interface props {
  label?: string;
  placeholder?: string;
  helpText?: string;
  disabled?: boolean;
  password?: boolean;
  rounded?: boolean;
  id?: string;
  icon?: ReactElement;
  required?: boolean;
  value: string;
  onTextChange: Function;
  className?: string;
}
