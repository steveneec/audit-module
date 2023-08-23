import { useDispatch, useSelector } from "react-redux";
import "../../styles/layouts/mobile-navigation.css";
import { selectTheme } from "../../store/features/settingsSlice";
import {
  selectIsMenuOpen,
  setMenuIsOpen,
} from "../../store/features/settingsSlice";
import { IoCloseOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { Link, Location, useLocation } from "react-router-dom";
import { navigationOption } from "../../types";

export default function MobileNavigation(props: props) {
  const theme = useSelector(selectTheme);
  const isMenuOpen = useSelector(selectIsMenuOpen);
  const dispatch = useDispatch();
  const location = useLocation();

  function handleOnCloseMenu() {
    dispatch(setMenuIsOpen(false));
  }

  return (
    <div
      className={
        isMenuOpen
          ? `mb-nav-container mb-nav-container-open`
          : `mb-nav-container`
      }
    >
      <div className="mb-nav" style={{ backgroundColor: theme.accentColor }}>
        {props.options.map((mOpt, key) => (
          <MenuOption key={key} option={mOpt} location={location} />
        ))}
      </div>
      <IoCloseOutline
        color="white"
        size={32}
        className={
          isMenuOpen
            ? `mb-close-nav-btn-open
               mb-close-nav-btn`
            : `mb-close-nav-btn`
        }
        onClick={handleOnCloseMenu}
      />
    </div>
  );
}

function MenuOption(params: { option: navigationOption; location: Location }) {
  return (
    <Link
      to={params.option.route ? params.option.route : ""}
      className={
        params.location.pathname === params.option.route
          ? `mb-nav-option mb-nav-opt-selected`
          : `mb-nav-option`
      }
    >
      <IconContext.Provider
        value={{
          className: "mb-icon",
        }}
      >
        {params.option.icon}
      </IconContext.Provider>
      <p>{params.option.title}</p>
    </Link>
  );
}

interface props {
  options: navigationOption[];
}
