import { IconContext } from "react-icons";
import "../../styles/layouts/navigation.css";
import { IoLogoPwa } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { navigationOption } from "../../types";

export default function Navigation(props: props) {
  const location = useLocation();

  return (
    <div className="navigation">
      {/*for logo*/}
      <div className="nav-logo">
        <IoLogoPwa size={64} color="white" />
      </div>
      {/*for navigation*/}
      <div>
        {props.options.map((opt: navigationOption, key) => (
          <Link
            to={opt.route ? opt.route : ""}
            key={key}
            className={
              opt.route === location.pathname
                ? `nav-option nav-opt-selected`
                : `nav-option`
            }
          >
            <IconContext.Provider
              value={{
                className: "nav-opt-icon",
              }}
            >
              {opt.icon}
            </IconContext.Provider>
            <p
              className={
                opt.route === location.pathname
                  ? `nav-opt-title nav-opt-title-selected`
                  : `nav-opt-title`
              }
            >
              {opt.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

interface props {
  options: navigationOption[];
}
