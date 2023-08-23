import { PropsWithChildren } from "react";
import "../styles/components/modal.css";

export default function Modal(props: props) {
  return (
    <div className={`modal ${props.isOpen && "modal-open"}`}>
      {props.children}
    </div>
  );
}

interface props extends PropsWithChildren {
  isOpen: boolean;
}
