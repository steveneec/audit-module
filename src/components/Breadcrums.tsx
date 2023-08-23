import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/components/breadcrums.css";
import { IoChevronForwardOutline } from "react-icons/io5";
import { routeNames } from "../router";

export default function Breadcrums() {
  const location = useLocation();
  const [breadcrums, setBreadcrums] = useState<string[]>([]);

  useEffect(() => {
    const _bc = location.pathname.split("/");
    setBreadcrums(_bc);
  }, []);

  return (
    <div className="breadcrums">
      {location.pathname !== "/" &&
        breadcrums.map((route, key) => (
          <>
            {key !== 0 && <IoChevronForwardOutline size="12px" />}
            <Link key={key} to={`/${route}`} className="breadcrum">
              <p>
                {route !== "" && location.pathname !== "/" //@ts-ignore
                  ? routeNames[route]
                  : "Home"}
              </p>
            </Link>
          </>
        ))}
    </div>
  );
}
