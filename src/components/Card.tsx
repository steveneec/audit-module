import { PropsWithChildren } from "react";
import "../styles/components/card.css";

export default function Card(props: props) {
  return (
    <div
      className={`card-container ${
        props.withStackDecorator && "card-with-stack"
      }`}
    >
      <div className={`card  ${props.className}`}>{props.children}</div>
      {props.withStackDecorator && <div className="card-stack" />}
    </div>
  );
}

interface props extends PropsWithChildren {
  withStackDecorator?: boolean;
  className?: string;
}
